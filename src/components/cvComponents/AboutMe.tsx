
interface AboutMeProp {
    texto: string;
}

const AboutMe = ({ texto }: AboutMeProp) => {

    if (!texto) return null;

  return (
    <section className="mb-6 font-serif">
            
        <h2 className="text-[17px] font-bold text-[#2b66a0] mb-1">
            Perfil Profesional
        </h2>
            
           
        <hr className="border-t border-[#2b66a0] mb-2" />
        <p className="text-[14.5px] text-black leading-relaxed text-justify">
            {texto}
        </p>
    </section>
  )
}

export default AboutMe
