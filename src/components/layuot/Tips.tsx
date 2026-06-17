interface TipsModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const Tips = ({ isOpen, onClose }: TipsModalProps) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white p-6 rounded-2xl max-w-md w-full shadow-2xl">
          <h2 className="text-xl font-bold mb-4 text-primary">Cómo generar un CV PRO</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
            <li><b>Perfil:</b> Incluye tus años de experiencia y tu stack principal.</li>
            <li><b>Logros:</b> No pongas tareas, pon resultados (ej: "Aumenté el rendimiento un 20%").</li>
            <li><b>Vacante:</b> Pega la descripción real para que la IA haga "match" con las palabras clave.</li>
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