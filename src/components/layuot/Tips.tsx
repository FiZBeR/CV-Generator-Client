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
          Cómo generar un CV PRO
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
          <li>
            <b>Datos y Enlaces:</b> Añade tus URLs (LinkedIn, GitHub,
            Portafolio). Sé muy específico con tu stack técnico y versiones (ej:
            "React 19, Node.js con Express, Prisma ORM").
          </li>
          <li>
            <b>Métricas y Contexto:</b> No redactes, solo lanza los datos crudos
            a la IA. Usa números reales, volumen de usuarios o alcance (ej:
            "Lideré equipo de 3", "Migré base de datos de 10GB", "Reduje tiempos
            de carga un 30%").
          </li>
          <li>
            <b>El Blanco Perfecto (Vacante):</b> Pega la descripción exacta del
            puesto y la empresa. Esto obliga a la IA a inyectar las palabras
            clave exactas que los filtros automáticos (ATS) de los reclutadores
            están buscando.
          </li>
        </ul>
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-primary text-white rounded-lg font-bold"
        >
          ¡Entendido!
        </button>
      </div>
    </div>
  );
};

export default Tips;
