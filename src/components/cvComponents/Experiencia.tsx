import type { HojaDeVida } from "../../types/cv";

interface Props {
    experiencia: HojaDeVida['experiencia'];
    proyectos: HojaDeVida['proyectos'];
}

const Experiencia = ({ experiencia, proyectos}: Props) => {
  return (
    <>
            {/* --- BLOQUE 1: EXPERIENCIA LABORAL --- */}
            {experiencia && experiencia.length > 0 && (
                <section className="mb-6 font-serif">
                    <h2 className="text-[17px] font-bold text-[#2b66a0] mb-1">
                        Experiencia Laboral
                    </h2>
                    <hr className="border-t border-[#2b66a0] mb-3" />

                    <div className="flex flex-col gap-4">
                        {experiencia.map((exp, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline mb-1 flex-wrap gap-x-2 gap-y-1">
                                    <h3 className="text-[15.5px] leading-snug">
                                        <span className="font-bold text-black">{exp.puesto}</span>
                                        <span className="text-gray-400 font-light mx-2">—</span>
                                        <span className="italic text-gray-600">{exp.empresa}</span>
                                    </h3>
                                    <span className="text-[14px] text-gray-500 ml-4">
                                        {exp.fechaInicio} - {exp.fechaFin}
                                    </span>
                                </div>
                                {/* Viñetas de logros */}
                                {exp.logros && exp.logros.length > 0 && (
                                    <ul className="list-[square] pl-5 text-[14.5px] text-black text-justify leading-relaxed marker:text-black marker:text-[12px]">
                                        {exp.logros.map((logro, idx) => (
                                            <li key={idx} className="mb-1">{logro}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* --- BLOQUE 2: PROYECTOS DESTACADOS --- */}
            {proyectos && proyectos.length > 0 && (
                <section className="mb-6 font-serif">
                    <h2 className="text-[17px] font-bold text-[#2b66a0] mb-1">
                        Proyectos Destacados
                    </h2>
                    <hr className="border-t border-[#2b66a0] mb-3" />

                    <div className="flex flex-col gap-4">
                        {proyectos.map((proy, index) => (
                            <div key={index}>
                                <div className="flex items-baseline mb-1">
                                    <h3 className="text-[15.5px] leading-snug">
                                        {/* Aquí usamos las llaves específicas de los proyectos */}
                                        <span className="font-bold text-black">{proy.nombre}</span>
                                        <span className="text-gray-400 font-light mx-2">—</span>
                                        <span className="italic text-gray-600">{proy.descripcion}</span>
                                    </h3>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
  )
}

export default Experiencia
