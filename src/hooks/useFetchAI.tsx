import { useState } from "react"
import axios from 'axios'
import type { HojaDeVida } from "../types/cv";
import toast from 'react-hot-toast';

const MAX_REINTENTOS = 3;
const DELAY_BASE_MS = 1000; // 

const esperar = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const useFetchAI = () => {
    const [dataHV, setDataHV] = useState<HojaDeVida | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const api = import.meta.env.VITE_API_URL_AI;

    const generarCV = async (perfil: string, vacante: string) => {
        setIsLoading(true);
        setError(null);

        for (let intento = 1; intento <= MAX_REINTENTOS; intento++) {
            try {
                const response = await axios.post(api, { datos: perfil, vacante: vacante });

                toast.dismiss('ia-status');
                setDataHV(response.data.cv);
                toast.success('HV generada con éxito');
                setIsLoading(false);
                return; // Sale del loop en cuanto hay éxito

            } catch (err) {
                const is503 = axios.isAxiosError(err) && err.response?.status === 503;
                const esUltimoIntento = intento === MAX_REINTENTOS;

                // Si es 503 y aún quedan reintentos → esperar y reintentar
                if (is503 && !esUltimoIntento) {
                    const segundos = (DELAY_BASE_MS * Math.pow(2, intento - 1)) / 1000; // 1 → 2 → 4
                    toast.loading(
                        `Servicio saturado, reintentando en ${segundos}s... (${intento}/${MAX_REINTENTOS - 1})`,
                        { id: 'ia-status' }
                    );
                    await esperar(segundos * 1000);
                    continue;
                }

                // Agotó reintentos (o no era un 503) → mostrar error final
                toast.dismiss('ia-status');

                let mensajeError = "Error al generar el CV";
                if (axios.isAxiosError(err)) {
                    const status = err.response?.status;
                    const backendMessage = err.response?.data?.error?.message;

                    if (status === 503) {
                        mensajeError = "El servicio de IA no está disponible. Inténtalo más tarde.";
                    } else if (!err.response) {
                        mensajeError = "No se pudo conectar con el servidor. Verifica tu conexión.";
                    } else if (backendMessage) {
                        mensajeError = backendMessage;
                    }
                } else if (err instanceof Error) {
                    mensajeError = err.message;
                }

                setError(mensajeError);
                toast.error(mensajeError, { id: 'ia-status' });
                break;
            }
        }

        setIsLoading(false);
    };

    const resetData = () => {
        setDataHV(null);
        setError(null);
    };

    return { dataHV, isLoading, error, generarCV, resetData };
};

export default useFetchAI;