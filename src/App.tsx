import {useState} from 'react'
import SideBar from './components/layuot/SideBar.tsx'
import CenterPanel from './components/layuot/CenterPanel.tsx'
import RightPanel from './components/layuot/RightPanel.tsx'
import useFetchAI from './hooks/useFetchAI.tsx';
import useFetchPDF from './hooks/useFechtPDF.tsx';

function App() {

  const { dataHV: hojaDeVida, isLoading, error, generarCV } = useFetchAI();
  const { isDownload, errorPDF, generarPDF } = useFetchPDF();

  const [perfil, setPerfil] = useState('');
  const [vacante, setVacante] = useState('');

  const handleGenerate = () => {
    console.log("Datos a enviar:", perfil, vacante);
    if (!perfil.trim() || !vacante.trim()) {
      alert("Por favor, llena tu perfil y la descripción de la vacante.");
      return;
  }
    generarCV(perfil, vacante);
  };

  const handleDownload = () => {
    if(!hojaDeVida){
      alert("No hay una HV lista para descargar.");
      return;
    }
    generarPDF(hojaDeVida);
  };

  return (
    <main className="flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)] md:h-screen md:ml-64 w-full">
      
      <CenterPanel 
        datosUser={perfil}
        setDatosUser={setPerfil}
        vacante={vacante}
        setVacante={setVacante}
        isLoading={isLoading}
        onGenerate={handleGenerate}
      />
      
      <RightPanel 
        hojaDeVida={hojaDeVida}
        isLoading={isDownload}
        onDownload={handleDownload}
      />
    </main>
  )
}

export default App
