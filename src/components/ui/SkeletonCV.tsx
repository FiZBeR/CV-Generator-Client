const SkeletonCV = () => {
  return (
    <article
      className={`
    border border-border-glass rounded-sm transition-colors duration-200
    p-10 px-9
    
  `}
      id="sheet"
      aria-label="Vista previa del documento A4"
    >
      <div className="flex flex-col gap-4" id="skel" aria-hidden="true">
        {/* Nombre */}
        <div className="h-6 w-2/5 rounded-sm bg-white/16" />
        <div className="h-2.5 w-[70%] rounded-sm bg-white/10" />

        {/* Sección */}
        <div className="h-3 w-1/4 mt-1 rounded-sm bg-white/15" />
        <div className="h-2.5 w-full rounded-sm bg-white/10" />
        <div className="h-2.5 w-[88%] rounded-sm bg-white/10" />
        <div className="h-2.5 w-[58%] rounded-sm bg-white/10" />

        {/* Sección */}
        <div className="h-3 w-1/4 mt-1 rounded-sm bg-white/15" />
        <div className="h-2.5 w-full rounded-sm bg-white/10" />
        <div className="h-2.5 w-[76%] rounded-sm bg-white/10" />
        <div className="h-2.5 w-[88%] rounded-sm bg-white/10" />
        <div className="h-2.5 w-[58%] rounded-sm bg-white/10" />

        {/* Sección */}
        <div className="h-3 w-1/4 mt-1 rounded-sm bg-white/15" />
        <div className="h-2.5 w-full rounded-sm bg-white/10" />
        <div className="h-2.5 w-[76%] rounded-sm bg-white/10" />

        {/* Sección */}
        <div className="h-3 w-1/4 mt-1 rounded-sm bg-white/15" />
        <div className="flex gap-3">
          <div className="h-2.5 w-[30%] rounded-sm bg-white/10" />
          <div className="h-2.5 w-[24%] rounded-sm bg-white/10" />
          <div className="h-2.5 w-[42%] rounded-sm bg-white/10" />
          <div className="h-2.5 w-[36%] rounded-sm bg-white/10" />
        </div>

        <p className="mt-[18px] font-mono text-[11px] tracking-[0.06em] uppercase text-text-muted">
          Tu CV aparecerá aquí
        </p>
      </div>
    </article>
  );
};

export default SkeletonCV;
