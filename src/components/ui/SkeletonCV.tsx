interface SkeletonProps {
  isLoading?: boolean;
}

const SkeletonCV = ({ isLoading }: SkeletonProps) => {

  isLoading = true;

  return (
    // 1. EL CONTENEDOR A4 (La base de la hoja)
    // Quitamos el padding. Mantenemos el overflow-hidden y agregamos un resplandor neón sutil.
    <div
      className={`relative mx-auto  overflow-hidden bg-white transition-all duration-300`}
      style={{
        width: "100%",
        maxWidth: "3000px",
        minHeight: "1123px",
      }}
    >
      {/* 3. LA HOJA DE PAPEL REAL (El Passepartout) */}
      {/* Esta capa blanca se pega a 3px de los bordes, dejando escapar solo el rayo neón */}
      <div className="flex flex-col top-[2px] left-[2px] right-[2px] bottom-[2px] bg-white z-10 p-[40px_50px]">
        {/* EL ESQUELETO (Las barras grises de carga) */}
        <div
          className={`relative mx-auto overflow-hidden bg-white transition-all duration-300`}
          style={{
            width: "100%",
            maxWidth: "525px",
            minHeight: "1123px",
          }}
        >
          
          {/* Título y subtítulo */}
          <div className="flex flex-col gap-2 mb-4">
            <div className="h-10 bg-surface-container-highest rounded w-1/3"></div>
            <div className="h-4 bg-surface-container-highest rounded w-1/4"></div>
          </div>

          <hr className="border-outline-variant mb-4" />

          {/* Párrafo de Perfil */}
          <div className="flex flex-col gap-3 mb-4">
            <div className="h-4 bg-surface-container-high rounded w-full"></div>
            <div className="h-4 bg-surface-container-high rounded w-full"></div>
            <div className="h-4 bg-surface-container-high rounded w-5/6"></div>
          </div>

          {/* Sección de Habilidades simulada */}
          <div className="h-6 bg-surface-container-highest rounded w-1/4 mb-2"></div>
          <hr className="border-outline-variant mb-4" />
          <div className="flex gap-4 mb-8">
            <div className="h-4 bg-surface-container-high rounded w-1/4"></div>
            <div className="h-4 bg-surface-container-high rounded w-1/2"></div>
          </div>

          {/* Sección de Experiencia simulada */}
          <div className="h-6 bg-surface-container-highest rounded w-1/4 mb-2"></div>
          <hr className="border-outline-variant mb-4" />
          <div className="flex justify-between mb-4">
            <div className="h-5 bg-surface-container-highest rounded w-1/3"></div>
            <div className="h-4 bg-surface-container-high rounded w-1/6"></div>
          </div>
          <div className="flex flex-col gap-3 pl-4">
            <div className="h-4 bg-surface-container-high rounded w-full"></div>
            <div className="h-4 bg-surface-container-high rounded w-11/12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCV;
