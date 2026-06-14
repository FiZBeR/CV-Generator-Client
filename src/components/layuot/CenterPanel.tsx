import React from "react";

const CenterPanel = () => {
  return (
    
      <section className="w-full md:w-1/2 bg-surface-container-lowest h-full flex flex-col border-b md:border-b-0 md:border-r border-outline-variant relative z-10">
        <div className="p-gutter flex-1 overflow-y-auto">
          <header className="mb-xl">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg font-bold text-on-surface mb-2">
              Generador de CV ATS
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Optimiza tu currículum para sistemas de seguimiento de candidatos
              utilizando inteligencia artificial.
            </p>
          </header>
          <form className="space-y-xl" id="cv-form">
            {/*<!-- Section 1 -->*/}
            <div className="group">
              <label className="block font-label-caps text-label-caps text-on-surface mb-sm">
                1. Tu perfil y experiencia
              </label>
              <textarea
                className="w-full h-48 bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm text-body-sm p-md focus:border-primary focus:ring-0 transition-colors resize-none placeholder-on-surface-variant opacity-70 focus:opacity-100"
                placeholder="Pega aquí tu experiencia laboral, educación y logros clave. Puedes incluir viñetas o texto en bruto."
              ></textarea>
            </div>
            {/*<!-- Section 2 -->*/}
            <div className="group">
              <label className="block font-label-caps text-label-caps text-on-surface mb-sm">
                2. Descripción de la vacante
              </label>
              <textarea
                className="w-full h-48 bg-surface-container-lowest border border-outline-variant text-on-surface font-body-sm text-body-sm p-md focus:border-primary focus:ring-0 transition-colors resize-none placeholder-on-surface-variant opacity-70 focus:opacity-100"
                placeholder="Pega aquí la descripción del puesto al que aplicas. La IA alineará tu experiencia con estas palabras clave."
              ></textarea>
            </div>
          </form>
        </div>
        {/*<!-- Sticky Bottom Action -->*/}
        <div className="p-gutter bg-surface-container-lowest border-t border-outline-variant mt-auto">
          <button
            className="w-full bg-primary text-on-primary py-3 px-6 rounded font-label-caps text-label-caps tracking-wide hover:bg-surface-tint transition-colors flex items-center justify-center gap-2"
            id="generate-btn"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">
              auto_awesome
            </span>
            Generar CV con IA
          </button>
        </div>
      </section>
  );
};

export default CenterPanel;
