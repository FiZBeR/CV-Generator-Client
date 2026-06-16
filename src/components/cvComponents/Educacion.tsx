import type { HojaDeVida } from "../../types/cv"
import React from 'react'

interface EducacionProps {
    educacion: HojaDeVida['educacion'];
    idiomas: HojaDeVida['idiomas']
}

const Educacion = ({ educacion, idiomas }: EducacionProps) => {
  return (
    <>
            {/* --- BLOQUE 1: EDUCACIÓN --- */}
            {educacion && educacion.length > 0 && (
                <section className="mb-6 font-serif">
                    <h2 className="text-[17px] font-bold text-[#2b66a0] mb-1">
                        Educación
                    </h2>
                    <hr className="border-t border-[#2b66a0] mb-3" />

                    <div className="flex flex-col gap-2">
                        {educacion.map((edu, index) => {
                            // Limpieza de fechas: Si hay inicio, lo une con guion. Si no, solo muestra el fin.
                            const fechaTexto = edu.fechaInicio 
                                ? `${edu.fechaInicio} - ${edu.fechaFin}` 
                                : edu.fechaFin;

                            return (
                                <div key={index} className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-[15.5px] leading-snug">
                                        <span className="font-bold text-black">{edu.titulo}</span>
                                        <span className="text-gray-400 font-light mx-2">—</span>
                                        <span className="italic text-gray-600">{edu.institucion}</span>
                                    </h3>
                                    {fechaTexto && (
                                        <span className="text-[14px] text-gray-500 ml-4 whitespace-nowrap">
                                            {fechaTexto}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* --- BLOQUE 2: IDIOMAS --- */}
            {idiomas && idiomas.length > 0 && (
                <section className="mb-6 font-serif">
                    <h2 className="text-[17px] font-bold text-[#2b66a0] mb-1">
                        Idiomas
                    </h2>
                    <hr className="border-t border-[#2b66a0] mb-2" />

                    {/* Usamos el mismo truco del CSS Grid que usamos en Habilidades */}
                    <div className="grid grid-cols-[130px_1fr] gap-x-2 gap-y-1 text-[14.5px] leading-relaxed text-black">
                        {idiomas.map((idioma, index) => (
                            <React.Fragment key={index}>
                                <span className="font-bold">{idioma.nombre}</span>
                                <span>{idioma.nivel}</span>
                            </React.Fragment>
                        ))}
                    </div>
                </section>
            )}
        </>
  )
}

export default Educacion
