import { useEffect, useState } from "react";
import CenterPanel from "./components/layuot/CenterPanel.tsx";
import RightPanel from "./components/layuot/RightPanel.tsx";
import useFetchAI from "./hooks/useFetchAI.tsx";
import useFetchPDF from "./hooks/useFechtPDF.tsx";
import Header from "./components/layuot/Header.tsx";
import toast from "react-hot-toast";
import Tips from "./components/layuot/Tips.tsx";

function App() {
  const {
    dataHV: hojaDeVida,
    isLoading,
    error,
    generarCV,
    resetData,
  } = useFetchAI();
  const { isDownload, errorPDF, generarPDF } = useFetchPDF();

  const [perfil, setPerfil] = useState("");
  const [vacante, setVacante] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleGenerate = () => {
    if (!perfil.trim() || !vacante.trim()) {
      toast.error("Por favor, llena tu perfil y la descripción de la vacante.");
      return;
    }

    generarCV(perfil, vacante);

    if (error) {
      toast.error(error);
      return;
    }
  };

  const handleDownload = () => {
    if (!hojaDeVida) {
      toast.error("No hay una HV lista para descargar.");
      return;
    }

    generarPDF(hojaDeVida);

    if (errorPDF) {
      toast.error(errorPDF);
      return;
    }
  };

  const handleAlert = () => {
    toast.error("Esta funcion aun no estas disponible!");
  };

  const handleReset = () => {
    setPerfil("");
    setVacante("");
    resetData();

    toast.success("Documento Limpio, iniciemos de nuevo!");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 2000);
  }, []);

  return (
    <>
      <Header
        reset={handleReset}
        open={() => setIsOpen(true)}
        alert={handleAlert}
      />
      <Tips isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div
        className="fixed inset-0 z-0 pointer-events-none bg-bg-primary"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('./public/fondo.jpg')" }}
        />
        <div className="absolute inset-0 z-1 bg-img-overlay" />
      </div>
      <main className="relative z-10 max-w-[1440px] mx-auto px-12 py-12 pb-16 grid grid-cols-12 gap-6 min-h-[calc(100dvh-72px)] items-start">
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
          alert={handleAlert}
        />
      </main>
    </>
  );
}

export default App;
