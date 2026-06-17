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
            const mensajeError = err instanceof Error ? err.message : "Error al descargar el PDF";
            setError("Ocurrió un error al generar el CV");
            toast.error(mensajeError);
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
