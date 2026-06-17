
interface HabilidaesProps {
    habilidades: string[];
}

const Habilidades = ({ habilidades }: HabilidaesProps) => {

    if(!habilidades || habilidades.length === 0){
        return null
    }

    const habilidadesTexto = habilidades.join(", ");

  return (
    <section className="mb-6 font-serif">
            <h2 className="text-[17px] font-bold text-[#2b66a0] mb-1">
                Habilidades Técnicas
            </h2>
            
            <hr className="border-t border-[#2b66a0] mb-2" />
            
            <div className="text-[14.5px] leading-relaxed text-black text-justify">
                {/* El título como elemento en línea (no rompe el bloque) */}
                <span className="font-bold mr-2">Tecnologías:</span>
                
                {/* El texto que fluirá y envolverá el espacio vacío */}
                <span>{habilidadesTexto}</span>
            </div>
        </section>
  )
}

export default Habilidades
