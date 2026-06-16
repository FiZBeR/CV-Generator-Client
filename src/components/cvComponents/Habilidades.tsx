
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
            
            <div className="grid grid-cols-[130px_1fr] gap-x-2 gap-y-1 text-[14.5px] leading-relaxed text-black">
                
                <span className="font-bold">Tecnologías</span>
                
                <span>{habilidadesTexto}</span>
                
                {/* NOTA : 
                  Cuando modifiquemos el Backend para recibir categorías reales, 
                  solo tendrás que mapear filas como esta:
                  
                  <span className="font-bold">Frontend</span>
                  <span>React, Tailwind, Vite</span>
                  
                  <span className="font-bold">Backend</span>
                  <span>Node.js, Express, Prisma</span>
                */}
            </div>
        </section>
  )
}

export default Habilidades
