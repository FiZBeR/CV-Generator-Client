import { useState } from "react"
import axios from 'axios'
import type { HojaDeVida } from "../types/cv";
import toast from 'react-hot-toast';

const useFetchAI = () => {

    const [ dataHV, setDataHV] = useState<HojaDeVida | null>(null);
    const [ isLoading, setIsLoading] = useState(false);
    const [ error, setError] = useState<string | null>(null);

    const api = import.meta.env.VITE_API_URL_AI;

    const generarCV = async (perfil: string, vacante: string) => {

        setIsLoading(true);

        try {
            const response = await axios.post(api, { datos: perfil, vacante: vacante });
            setDataHV(response.data.cv);
            toast.success('HV generada con exito');
        } catch (err) {
            let mensajeError = "Error al generar el CV";

            if (axios.isAxiosError(err)) {
                const status = err.response?.status;
                const backendMessage = err.response?.data?.error?.message;

                if (status === 503) {
                    mensajeError = "El servicio de IA está saturado en este momento, intenta de nuevo en unos minutos.";
                } else if (!err.response) {
                    // No hubo respuesta del servidor (timeout, sin conexión, CORS, etc.)
                    mensajeError = "No se pudo conectar con el servidor. Verifica tu conexión.";
                } else if (backendMessage) {
                    mensajeError = backendMessage;
                }
            } else if (err instanceof Error) {
                mensajeError = err.message;
            }

            setError(mensajeError);
            toast.error(mensajeError)
        }  finally {
            setIsLoading(false);
        }
    }

    const resetData = () => {
        setDataHV(null);
        setError(null);
    }


  return {
    dataHV,
    isLoading,
    error,
    generarCV,
    resetData
  }
}

export default useFetchAI
