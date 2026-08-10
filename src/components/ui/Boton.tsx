import React from 'react';

interface BotonProps {
    text: string;
    onClick: () => void;
    isLoading?: boolean;
    color: 'primary' | 'secondary';
    isFullWidth?: boolean;
    icon?: string;
}

const Boton = ({ text, onClick, isLoading, color, isFullWidth, icon }: BotonProps) => {
    // Clases base comunes a todos los botones
    const baseClasses = `
        inline-flex items-center justify-center gap-2
        min-h-[44px] py-3 px-6
        rounded-sm
        text-sm font-bold tracking-[-0.005em]
        transition-all duration-180 ease-soft
        whitespace-nowrap
        disabled:opacity-50 disabled:cursor-not-allowed
        ${isFullWidth ? 'w-full' : ''}
    `;

    // Clases específicas según la variante
    const colorClasses = color === 'primary'
        ? 'bg-brand-accent text-bg-primary hover:translate-y-[-4px] hover:shadow-glow-green'
        : 'bg-pill text-text-primary border border-border-soft hover:bg-pill-hover hover:border-border-strong';

    return (
        <button
            className={`${baseClasses} ${colorClasses}`}
            type="button"
            onClick={onClick}
            disabled={isLoading}
        >
            {isLoading ? (
                <span className="material-symbols-outlined animate-spin text-[18px]">
                    progress_activity
                </span>
            ) : icon ? (
                <span className="material-symbols-outlined text-[18px]">{icon}</span>
            ) : null}

            {isLoading ? "Generando..." : text}
        </button>
    );
};

export default Boton;