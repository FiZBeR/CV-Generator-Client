interface TipsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Tips = ({ isOpen, onClose }: TipsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div
        className="bg-surface p-6 rounded-2xl max-w-md w-full max-h-[90dvh] overflow-y-auto shadow-2xl border border-border-glass"
        // bg-surface = #0b0b0f (fondo oscuro)
        // borde sutil para dar profundidad
      >
        <h2 className="text-xl font-bold mb-4 text-brand-accent">
          Sigue estos tips para un mejor resultado
          {/* text-brand-accent = #00ff66 (verde neón) */}
        </h2>

        <ul className="list-disc pl-5 space-y-2 text-text-primary text-sm">
          {/* texto principal en blanco */}
          <li>
            <b className="text-brand-cyan">Datos personales y habilidades:</b>{" "}
            No olvides colocar tus datos personales como,{" "}
            <b>nombre y apellidos</b>, tu <b>título profesional</b>e información
            de contacto como tu <b>teléfono</b>, <b>email</b> y tu{" "}
            <b>link de LinkedIn</b>. Para que tengas más oportunidad al pasar
            los filtros ATS, coloca en un párrafo palabras claves alusivas a tus{" "}
            <b>habilidades</b> como profesional.
          </li>
          <li>
            <b className="text-brand-cyan">Experiencia y Proyectos:</b> Es
            fundamental que para que tu Experiencia se vea bien reflejada
            agregues el <b>nombre de la empresa</b> y el{" "}
            <b>rol que desempeñaste</b>, junto a la <b>fecha de inicio y fin</b>{" "}
            si corresponde, junto a <b>tus logros</b>.
            <br />
            Si no cuentas con experiencia laboral puedes agregar{" "}
            <b>proyectos personales</b> que reflejen tus capacidades técnicas.
            Coloca el <b>nombre</b> del proyecto junto a una <b>descripción</b>{" "}
            del mismo; sería ideal que colocaras fechas de inicio y fin para dar
            una idea de progresión en el tiempo.
          </li>
          <li>
            <b className="text-brand-cyan">Educación e Idiomas:</b> Esta sección
            es muy fácil: solo coloca el <b>nombre de la institución</b>, el{" "}
            <b>título</b> que obtuviste y la <b>fecha</b> en la que te
            graduaste. La IA hará el resto por ti. Si tienes habilidades en
            otros idiomas, colócalas junto al nivel que tienes.
          </li>
          <li>
            <b className="text-brand-cyan">El Blanco Perfecto (Vacante):</b>{" "}
            Pega la descripción <b>exacta</b> del puesto y la empresa. Esto
            obliga a la IA a inyectar las palabras clave exactas que los filtros
            automáticos (ATS) de los reclutadores están buscando.
          </li>
        </ul>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-brand-accent text-black rounded-lg font-bold cursor-pointer hover:bg-opacity-80 transition-all"
          // Fondo verde neón, texto negro para alto contraste
        >
          ¡Entendido!
        </button>
      </div>
    </div>
  );
};

export default Tips;
