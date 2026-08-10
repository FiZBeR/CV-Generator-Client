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

const CenterPanel = ({
  datosUser,
  setDatosUser,
  vacante,
  setVacante,
  isLoading,
  onGenerate,
}: CenterpanelProps) => {
  return (
    <section
      className="col-span-5 bg-bg-glass backdrop-blur-glass-sm border border-border-accent shadow-glass p-8 flex flex-col overflow-y-auto"
      style={{ height: "calc(100dvh - 184px)" }}
      data-od-id="panel-form"
    >
      <header className="mb-7">
        <p className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-brand-accent mb-3.5">
          Generador de CV · Optimizado ATS
        </p>
        <h2 className="font-display text-h2 font-bold leading-[1.08] tracking-[-0.045em] text-text-primary">
          Generador de CV ATS
        </h2>
        <p className="text-lead leading-[1.55] text-text-muted mt-2.5 max-w-[52ch]">
          Pega tu perfil profesional y la descripción de la vacante. La IA
          reescribe tu CV para superar los filtros automáticos de selección.
        </p>
      </header>

      <form className="flex-1 flex flex-col gap-5.5 mt-7" id="cv-form">
        {/* Campo: Perfil */}
        <div className="flex flex-col gap-2">
          
          <TextArea
            label="Perfil y experiencia"
            placeholder="Pega aquí tu resumen profesional, historial laboral, logros y formación…"
            value={datosUser}
            onChange={setDatosUser}
            maxLength={2400}
            rows={7}
            showCounter={true}
          />
          <p className="text-[12.5px] leading-[1.5] text-text-muted">
            Se conservan tus datos verificables: la IA reorganiza y reformula el
            contenido.
          </p>
        </div>

        {/* Campo: Vacante */}
        <div className="flex flex-col gap-2">
          
          <TextArea
            label="Descripción de la vacante"
            placeholder="Pega aqui la descripcion completa de la vacante a la que vas a aplicar"
            value={vacante}
            onChange={setVacante}
            maxLength={1200}
            showCounter={true}
          />
          <p className="text-[12.5px] leading-[1.5] text-text-muted">
            La IA extrae las keywords del puesto y alinea tu CV con lo que busca
            el reclutador.
          </p>
        </div>
      </form>

      <footer className="sticky bottom-0 mt-6 pt-5.5 bg-gradient-to-t from-bg-primary/72 to-transparent">
        <Boton
          text="Generar CV con IA"
          onClick={onGenerate}
          isLoading={isLoading}
          color="primary"
          isFullWidth={true}
          icon="auto_awesome"
        />
      </footer>
    </section>
  );
};

export default CenterPanel;
