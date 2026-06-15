import {useState} from 'react'
import SideBar from './components/layuot/SideBar.tsx'
import CenterPanel from './components/layuot/CenterPanel.tsx'
import RightPanel from './components/layuot/RightPanel.tsx'

function App() {

  const [perfil, setPerfil] = useState('');
  const [vacante, setVacante] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [datos, setDatos] = useState({})

  const handleGenerate = () => {
    setIsLoading(true);
    console.log("Datos a enviar:", perfil, vacante);
    
    // Simulamos que el backend responde después de 2 segundos
    setTimeout(() => {
        setIsLoading(false);
        console.log("¡CV Generado!");
    }, 2000);
  };

  return (
    <main className="flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)] md:h-screen md:ml-64 w-full">
      <SideBar/>
      <CenterPanel 
        datosUser={perfil}
        setDatosUser={setPerfil}
        vacante={vacante}
        setVacante={setVacante}
        isLoading={isLoading}
        onGenerate={handleGenerate}
      />
      
      <RightPanel/>
    </main>
  )
}

export default App
