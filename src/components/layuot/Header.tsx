interface HeaderProp {
  reset: () => void;
  open: () => void;
  alert: () => void;
}

const Header = ({ reset, open, alert }: HeaderProp) => {
  return (
    <header className="w-full flex items-center justify-between px-gutter h-16 bg-surface-container-low border-b border-outline-variant z-50 shrink-0">
      <div className="flex items-center gap-8">
        <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
          Resume AI
        </span>
        <nav className="hidden md:flex items-center gap-6">
          <button
            className="flex items-center gap-2 text-on-surface font-label-caps text-label-caps hover:text-primary transition-colors"
            onClick={alert}
          >
            <span className="material-symbols-outlined text-[20px]">
              description
            </span>
            My Resumes
          </button>
          <button
            type="button"
            className="flex items-center gap-2 text-red-500 hover:text-primary transition-colors animate-pulse  hover:animate-none font-label-caps text-label-caps"
            onClick={(e) => {
              console.log("¿Llegó la función open?", open);
              e.preventDefault(); // <-- ESTA LÍNEA ES LA LLAVE MAESTRA
              e.stopPropagation(); // <-- Esta línea asegura que el click no "burbujee" a otros elementos
              open();
            }}
          >
            <span className="material-symbols-outlined text-[20px] ">
              tips_and_updates
            </span>
            Tips
          </button>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="hidden sm:flex items-center gap-2 bg-primary text-on-primary py-2 px-4 rounded-lg font-label-caps text-label-caps hover:opacity-90 transition-opacity shadow-sm"
          onClick={reset}
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          New Resume
        </button>
        <div className="flex items-center gap-2 text-on-surface-variant border-l border-outline-variant pl-4 ml-2">
          <button onClick={alert}>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
              account_circle
            </span>
          </button>
          <button onClick={alert}>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">
              settings
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
