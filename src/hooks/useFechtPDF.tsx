import { useState } from "react"
import axios from 'axios'
import type { HojaDeVida } from "../types/cv";
import toast from 'react-hot-toast/headless';

const useFetchPDF = () => {

    const [ isDownload, setIsDownload] = useState(false);
    const [ errorPDF, setErrorPDF] = useState<string | null>(null);

    const api = import.meta.env.VITE_API_URL_PDF;
    

    const generarPDF = async (hV: HojaDeVida) => {

        setIsDownload(true);
        setErrorPDF(null);

        try {
            const response = await axios.post(api, hV, { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));

            const link = document.createElement('a'); // Creamos la etiqueta <a>
            link.href = url;
            link.setAttribute('download', 'Mi_CV_Optmizado.pdf'); // Nombre del archivo
            
            document.body.appendChild(link); // Lo pegamos al HTML
            link.click(); // ¡Disparamos la descarga!
            
            // --- LIMPIEZA SENIOR ---
            link.parentNode?.removeChild(link); // Borramos el <a> del HTML
            window.URL.revokeObjectURL(url);

        } catch (err) {
            const mensajeError = err instanceof Error ? err.message : "Error al descargar el PDF";
            setErrorPDF("Ocurrió un error al generar el CV");
            toast.error(mensajeError)
        }  finally {
            setIsDownload(false);
        }
    }


  return {
    isDownload,
    errorPDF,
    generarPDF
  }
}

export default useFetchPDF
