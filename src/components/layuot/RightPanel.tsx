import React from "react";
import Boton from "../ui/Boton";

const RightPanel = () => {

  const handleSave = () => {
    setTimeout(() => {
        console.log("¡CV Guardado!");
    }, 2000);
  };

  const handleDownload = () => {
    setTimeout(() => {
        console.log("¡CV Guardado!");
    }, 2000);
  };


  return (
      <section className="w-full md:w-1/2 bg-surface-container h-full flex flex-col relative">
        {/* Preview Top Bar */}
        <div className="h-16 border-b border-outline-variant flex items-center justify-between px-gutter bg-surface-container-lowest shrink-0">
          <div className="font-label-caps text-label-caps text-primary flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Vista Previa del Documento
          </div>
          <div className="flex gap-2">
            <Boton
              text='Guardar Borrador'
              onClick={handleSave}
              color="secondary"
              isFullWidth={true}
              icon="save"
            />

            <Boton
              text='Descargar PDF'
              onClick={handleDownload}
              color="secondary"
              isFullWidth={true}
              icon="download"
            />
            
          </div>
        </div>
        {/*Canvas Area */}
        <div className="flex-1 overflow-y-auto p-gutter flex justify-center items-start bg-surface-container">
          {/* A4 Sheet Representation (Skeleton UI) */}
          <div
            className="a4-sheet bg-surface-container-lowest shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-outline-variant p-[5%] flex flex-col gap-[4%] mt-4 mb-xl transition-all duration-500"
            id="resume-preview"
          >
            {/* Header Skeleton */}
            <div className="border-b border-outline-variant pb-[4%]">
              <div className="h-8 bg-surface-container-highest w-1/3 mb-3"></div>
              <div className="flex gap-4">
                <div className="h-3 bg-surface-variant w-1/6"></div>
                <div className="h-3 bg-surface-variant w-1/4"></div>
              </div>
            </div>
            {/* Summary Skeleton */}
            <div>
              <div className="h-4 bg-surface-variant w-1/5 mb-3"></div>
              <div className="space-y-2">
                <div className="h-2 bg-surface-container-highest w-full"></div>
                <div className="h-2 bg-surface-container-highest w-full"></div>
                <div className="h-2 bg-surface-container-highest w-5/6"></div>
              </div>
            </div>
            {/* Experience Skeleton */}
            <div className="flex-1">
              <div className="h-4 bg-surface-variant w-1/4 mb-4"></div>
              {/* Job 1 */}
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <div className="h-3 bg-surface-container-highest w-1/3"></div>
                  <div className="h-3 bg-surface-container-highest w-1/6"></div>
                </div>
                <div className="h-2 bg-surface-variant w-1/4 mb-2"></div>
                <div className="space-y-2 pl-4">
                  <div className="h-2 bg-surface-container-high w-11/12"></div>
                  <div className="h-2 bg-surface-container-high w-full"></div>
                  <div className="h-2 bg-surface-container-high w-4/5"></div>
                </div>
              </div>

              {/*<!-- Job 2 */}
              <div>
                <div className="flex justify-between mb-2">
                  <div className="h-3 bg-surface-container-highest w-1/4"></div>
                  <div className="h-3 bg-surface-container-highest w-1/5"></div>
                </div>
                <div className="h-2 bg-surface-variant w-1/5 mb-2"></div>
                <div className="space-y-2 pl-4">
                  <div className="h-2 bg-surface-container-high w-full"></div>
                  <div className="h-2 bg-surface-container-high w-5/6"></div>
                </div>
              </div>
            </div>
            {/*<!-- Skills Skeleton */}
            <div className="mt-auto">
              <div className="h-4 bg-surface-variant w-1/6 mb-3"></div>
              <div className="flex flex-wrap gap-2">
                <div className="h-6 bg-surface-container-highest w-16"></div>
                <div className="h-6 bg-surface-container-highest w-24"></div>
                <div className="h-6 bg-surface-container-highest w-20"></div>
                <div className="h-6 bg-surface-container-highest w-14"></div>
                <div className="h-6 bg-surface-container-highest w-28"></div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Loading Overlay (Hidden by default) */}
        <div
          className="absolute inset-0 bg-surface-container/50 backdrop-blur-sm hidden flex-col items-center justify-center z-20"
          id="loading-overlay"
        >
          <span className="material-symbols-outlined text-primary text-[48px] animate-spin">
            refresh
          </span>
          <p className="font-body-md text-body-md text-on-surface mt-4 font-medium">
            Optimizando con IA...
          </p>
        </div>
      </section>
  );
};

export default RightPanel;
