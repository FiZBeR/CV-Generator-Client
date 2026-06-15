interface TextAreaProps {
    label: string; 
    placeholder?: string;
    value: string; 
    onChange: (nuevoValor: string) => void;
}

const TextArea = ({label, placeholder, value, onChange}: TextAreaProps) => {
  return (
    <>
        <label className="block font-label-caps text-label-caps text-primary mb-sm">
            {label}
        </label>
        <textarea
            className="w-full h-48 bg-surface-container-lowest border border-outline-variant text-primary font-body-sm text-body-sm p-md focus:border-primary focus:ring-0 transition-colors resize-none placeholder-on-surface-variant opacity-70 focus:opacity-100"
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
                const textoLimpio = e.target.value;
                onChange(textoLimpio); 
            }}
        ></textarea>
    </>
  )
}

export default TextArea
