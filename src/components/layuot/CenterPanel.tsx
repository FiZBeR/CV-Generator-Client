import React from "react";
import TextArea from "../ui/TextArea";
import Boton from "../ui/Boton";

interface CenterpanelProps {
  datosUser: string;
  setDatosUser: (valor: string) => void;
  vacante: string;
  setVacante: (valor: string) => void;
  isLoading: boolean;
  onGenerate: () => void;
}

const CenterPanel = ({ datosUser, setDatosUser, vacante, setVacante, isLoading, onGenerate}: CenterpanelProps) => {

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
            <div className="group">
              <TextArea 
                label='Tu perfil y tu experiencia'
                placeholder="Escribe aqui tu informacion de persola, tu info de contacto, tu experiencia, educacion o proyectos y los idioamas que sabes"
                value={datosUser}
                onChange={setDatosUser}
              />
            </div>
            <div className="group">
              <TextArea
                label='Descripcion de la vacante'
                placeholder="Pega aqui la descripcion completa de la vacante a la que vas a aplicar"
                value={vacante}
                onChange={setVacante}
              />
            </div>
          </form>
        </div>
        <div className="p-gutter bg-surface-container-lowest border-t border-outline-variant mt-auto">
          <Boton
            text='Generar CV con IA'
            onClick={onGenerate}
            isLoading={isLoading}
            color="primary"
            isFullWidth={true}
            icon="auto_awesome"
          />
        </div>
      </section>
  );
};

export default CenterPanel;
