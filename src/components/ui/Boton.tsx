
interface BotonProps {
    text: string;
    onClick: () => void;
    isLoading?: boolean;
    color: 'primary' | 'secondary';
    isFullWidth?: boolean;
    icon?: string;
}

const Boton = ({text, onClick, isLoading, color, isFullWidth, icon}: BotonProps) => {

    const colorCSS = color === 'primary' 
        ? 'bg-primary text-white hover:bg-gray-800'  
        : 'bg-white text-black border border-outline-variant hover:bg-gray-300 rounded-lg';

    const anchoCSS = isFullWidth ? 'w-full' : '';

  return (
        <button
            className={`${anchoCSS} ${colorCSS} text-on-primary py-3 px-6 rounded font-label-caps text-label-caps tracking-wide hover:bg-surface-tint transition-colors flex items-center justify-center gap-2`}
            id="generate-btn"
            type="button"
            onClick={onClick}
            disabled={isLoading}
        >
            {isLoading ? (
                <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
            ) : icon ? (
                <span className="material-symbols-outlined text-[18px]">{icon}</span>
            ) : null}

            {isLoading ? "Generando..." : text}
        </button>
  )
}

export default Boton