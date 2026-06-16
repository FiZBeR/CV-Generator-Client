import { useState } from "react"
import axios from 'axios'
import type { HojaDeVida } from "../types/cv";

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
            console.log(response.data.cv);
        } catch (err) {
            console.error(err);
        setError("Ocurrió un error al generar el CV");
        }  finally {
            setIsLoading(false);
        }
    }


  return {
    dataHV,
    isLoading,
    error,
    generarCV
  }
}

export default useFetchAI
