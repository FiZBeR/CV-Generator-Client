interface TipsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Tips = ({ isOpen, onClose }: TipsModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        className="bg-white p-6 rounded-2xl max-w-md w-full shadow-2xl"
        style={{
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "16px",
          maxWidth: "448px",
          width: "100%",
        }}
      >
        <h2 className="text-xl font-bold mb-4 text-primary">
          Sigue estos tips para un mejor resultado
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
          <li>
            <b className="text-[#D35D3F]">Datos personales y habilidades:</b> No olvides colocar tus datos personales como, <b>nombre y apellidos</b>, tu <b>titulo profesional</b>
            e informacion de contacto como tu <b>telefono</b>, <b>email</b> y tu <b>link de Linkedin</b>. Para que tengas mas oportunidad al pasar los filtras 
            ATS coloca en un parrafo palabras claves alusivas a tus <b>habilidades</b> como profesional.
          </li>
          <li>
            <b className="text-[#D35D3F]">Experiencia y Proyectos:</b> Es fundamental que para que tu Experiencia se vea bien reflejada agregues el <b>nombre de la empresa</b> y el <b>rol
            que desempeñaste</b>, junto a la <b>fecha de inicio y fin</b> si corresponde junto a <b>tu logros</b>.

            Si no cuentas con Experiencia laboral puedes agregar <b>proyectos personales</b> que reflejen tus capacidades tecnicas, coloca el <b>nombre</b> del 
            proyecto junto a una <b>descripcion</b> del mismo, seria ideal que colocaras fechas de inicio y de fin para dar una idea de progrecion en el tiempo.
          </li>
          <li>
            <b className="text-[#D35D3F]">Educacion e Idiomas:</b> Esta seccion es muy facil, solo coloca el <b>nombre de la institucion</b>, el <b>titulo</b> que obtuviste y la <b>fecha</b> en la 
            que te graduaste, la IA hara el resto por ti, si tienes habilidades en otros idiamas, colocalas, junto al nivel que tienes.
          </li>
          <li>
            <b className="text-[#D35D3F]">El Blanco Perfecto (Vacante):</b> Pega la descripción <b>exacta</b> del
            puesto y la empresa. Esto obliga a la IA a inyectar las palabras
            clave exactas que los filtros automáticos (ATS) de los reclutadores
            están buscando.
          </li>
        </ul>
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-primary text-white rounded-lg font-bold cursor-pointer"
        >
          ¡Entendido!
        </button>
      </div>
    </div>
  );
};

export default Tips;
