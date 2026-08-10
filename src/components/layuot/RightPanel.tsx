import Boton from "../ui/Boton";
import type { HojaDeVida } from "../../types/cv.js";
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

const RightPanel = ({
  isLoading,
  onDownload,
  hojaDeVida,
  alert,
}: RightPanelProps) => {
  return (
    <section
      className="lg:col-span-7 bg-bg-glass backdrop-blur-glass-sm border border-border-accent shadow-glass p-6 lg:p-8 flex flex-col overflow-y-auto lg:h-[calc(100dvh-184px)]"
      data-od-id="panel-preview"
    >
      {/* Preview Top Bar */}
      <div className="flex items-center justify-between gap-3.5 flex-wrap pb-[18px] border-b border-border-glass">
        <button
          id="btn-preview"
          className="hidden sm:inline-flex items-center justify-center gap-2 min-h-[44px] py-3 px-6 rounded-sm border border-border-soft text-text-primary text-sm font-bold tracking-[-0.005em] transition-all duration-180 ease-soft whitespace-nowrap bg-pill hover:bg-pill-hover hover:border-border-strong"
          data-od-id="btn-preview"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          Vista Previa
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Boton
            text="Guardar Borrador"
            onClick={alert}
            color="secondary"
            isFullWidth={true}
            icon=""
          />

          <Boton
            text="Descargar PDF"
            onClick={onDownload}
            color="secondary"
            isFullWidth={true}
            icon="download"
          />
        </div>
      </div>

      {/* Canvas: área de vista previa */}
      <div className=" flex-1  flex justify-center py-[22px] px-1.5 pb-2 scrollbar-thin scrollbar-thumb-border-hairline">
        {isLoading || !hojaDeVida ? (
          <>
            <div className="flex flex-col items-center w-full h-full">
              {/* 3. El placeholder del CV (sustituye a <SkeletonCV />) */}
              <div className="flex-1 flex items-center justify-center w-full">
                <p className="text-2xl md:text-3xl font-light text-center text-text-muted">
                  <strong className="font-bold">TÚ</strong> CV APARECERÁ AQUÍ
                </p>
              </div>
            </div>
          </>
        ) : (
          <div
            className="bg-white overflow-y-auto text-black mx-auto shadow-2xl ring-1 ring-gray-900/5 w-full max-w-[794px] p-5 sm:p-8 lg:px-[50px] lg:py-10"
          >
            <HeaderCV datos={hojaDeVida.datosPersonales} />
            <AboutMe texto={hojaDeVida.aboutMe} />
            <Habilidades habilidades={hojaDeVida.habilidades} />
            <Experiencia
              experiencia={hojaDeVida.experiencia}
              proyectos={hojaDeVida.proyectos}
            />
            <Educacion
              educacion={hojaDeVida.educacion}
              idiomas={hojaDeVida.idiomas}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default RightPanel;
