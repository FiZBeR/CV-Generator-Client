import React from "react";

interface TextAreaProps {
  label?: string; // Opcional, por si quieres incluirlo dentro
  placeholder?: string;
  value: string;
  onChange: (nuevoValor: string) => void;
  maxLength?: number; // Límite de caracteres (opcional)
  rows?: number; // Número de filas visibles (opcional)
  className?: string; // Para extender estilos desde fuera
  showCounter?: boolean; // Muestra el contador dentro del componente
}

const TextArea = ({
  label,
  placeholder,
  value,
  onChange,
  maxLength,
  rows = 5,
  className = "",
  showCounter = false,
}: TextAreaProps) => {
  // Función para manejar el cambio con límite de caracteres
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nuevoTexto = e.target.value;
    if (maxLength && nuevoTexto.length > maxLength) {
      // Opcional: truncar automáticamente o simplemente no actualizar
      // En este caso, no actualizamos para respetar el límite
      return;
    }
    onChange(nuevoTexto);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-baseline justify-between gap-3">
        {label && (
          <label className="text-[13px] font-semibold text-text-primary">
            {label}
          </label>
        )}
        {showCounter && maxLength && (
          <span
              className={`font-mono text-meta text-text-muted tabular-nums ${value.length > maxLength - 60 ? "text-brand-accent" : ""}`}
            >
              {value.length} / {maxLength}
            </span>
        )}
      </div>

      <textarea
        className={`
                    w-full
                    bg-bg-surface
                    border border-border
                    rounded-sm
                    text-text-primary
                    font-body text-[14.5px] leading-[1.6]
                    py-4 px-[18px]
                    resize-y
                    placeholder:text-text-muted/65
                    focus:outline-none
                    focus:border-brand-accent
                    focus:shadow-inner-glow
                    transition-all duration-180 ease-soft
                    scrollbar-thin scrollbar-thumb-border-hairline
                    ${className}
                `}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        rows={rows}
      />
    </div>
  );
};

export default TextArea;
