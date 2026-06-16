import type { HojaDeVida } from "../../types/cv"
import React from 'react'

interface headerCVProps {
    datos: HojaDeVida['datosPersonales']
}

const HeaderCV = ({ datos }: headerCVProps) => {

    const nombreCompleto = datos.nombre 
        ? `${datos.nombre} ${datos.apellidos}`.trim() 
        : "Coloca tu nombre aqui";

    const titulo = datos.tituloProfesional || "Coloca tu titulo profesional aqui";

    const contactos = [
        datos.email || "Tu correo",
        datos.telefono || "Tu numero de contacto",
        datos.linkedin || "El link a tu Linkedin"
    ].filter(Boolean);

  return (
    <header className="text-center font-serif mb-6">
            {/* TÍTULO PRINCIPAL (Nombre) */}
            <h1 className="text-[28px] font-bold text-black leading-tight mb-1">
                {nombreCompleto}
            </h1>
            
            {/* SUBTÍTULO (Perfil Técnico) */}
            <h2 className="text-[15px] text-[#2b66a0] mb-1">
                {titulo}
            </h2>

            {/* FILA DE CONTACTO (Con separadores dinámicos) */}
            <div className="text-[14px] text-[#2b66a0] flex flex-wrap justify-center items-center gap-x-2 leading-relaxed">
                {contactos.map((item, index) => (
                    <React.Fragment key={index}>
                        <span>{item}</span>
                        {/* Ponemos el separador | en todos menos en el último */}
                        {index < contactos.length - 1 && (
                            <span className="text-[#2b66a0]/70 font-light">|</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </header>
  )
}

export default HeaderCV
