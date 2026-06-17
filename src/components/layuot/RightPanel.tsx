import Boton from "../ui/Boton";
import type { HojaDeVida } from "../../types/cv.js";
import SkeletonCV from "../ui/SkeletonCV";
import HeaderCV from "../cvComponents/HeaderCV.js";
import AboutMe from "../cvComponents/AboutMe.js";
import Habilidades from "../cvComponents/Habilidades.js";
import Experiencia from "../cvComponents/Experiencia.js";
import Educacion from "../cvComponents/Educacion.js";

interface RightPanelProps {
  isLoading?: boolean;
  onDownload: () => void;
  hojaDeVida: HojaDeVida | null;
  alert: () => void;
}

const RightPanel = ({isLoading, onDownload, hojaDeVida, alert}: RightPanelProps) => {

  return (
      <section className="w-full md:w-1/2 bg-surface-container h-full flex flex-col relative overflow-y-auto">
        {/* Preview Top Bar */}
        <div className="h-16 border-b border-outline-variant flex items-center justify-between px-gutter bg-surface-container-lowest shrink-0 ">
          <div className="font-label-caps text-label-caps text-primary flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Vista Previa del Documento
          </div>
          <div className="flex gap-2">
            <Boton
              text='Guardar Borrador'
              onClick={alert}
              color="secondary"
              isFullWidth={true}
              icon="save"
            />

            <Boton
              text='Descargar PDF'
              onClick={onDownload}
              color="secondary"
              isFullWidth={true}
              icon="download"
            />
            
          </div>
        </div>
        <div className="overflow-y-auto">
        { isLoading || !hojaDeVida ? (
          <SkeletonCV />
        ) : (
          <div className="bg-white text-black mx-auto shadow-2xl ring-1 ring-gray-900/5" 
              style={{ 
              width: '100%', 
              maxWidth: '794px', // Ancho exacto A4
              minHeight: '1123px', // Alto exacto A4
              padding: '40px 50px', // Márgenes fijos estilo Word
          }}> 
            <HeaderCV datos={hojaDeVida.datosPersonales}/>
            <AboutMe texto={hojaDeVida.aboutMe} />
            <Habilidades habilidades={hojaDeVida.habilidades} />
            <Experiencia experiencia={hojaDeVida.experiencia} proyectos={hojaDeVida.proyectos} />
            <Educacion educacion={hojaDeVida.educacion} idiomas={hojaDeVida.idiomas} />
          </div>
        )}
        </div>
        
        
      </section>
  );
};

export default RightPanel;
