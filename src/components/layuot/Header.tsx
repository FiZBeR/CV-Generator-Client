import { useState } from "react";

interface HeaderProp {
  reset: () => void;
  open: () => void;
  alert: () => void;
}

const Header = ({ reset, open, alert }: HeaderProp) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (action: () => void) => {
    setMenuOpen(false);
    action();
  };

  return (
    <header style={{ marginBottom: 0 }} className="sticky top-0 !mb-0 z-20 bg-bg-primary/72 backdrop-blur-glass border-b border-border-glass h-header">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between gap-3 sm:gap-gap px-4 sm:px-6 lg:px-12">
        {/* Brand */}
        <button className="inline-flex items-center gap-2.5 font-display font-bold text-[17px] sm:text-[19px] tracking-[-0.02em] text-text-primary">
          <span className="relative w-6 h-6 rounded-sm bg-gradient-to-br from-brand-accent to-brand-cyan shadow-[0_0_18px_var(--color-glow-green)]">
            <span className="absolute inset-2 rounded-sm bg-bg-primary"></span>
          </span>
          Resume<em className="not-italic text-brand-accent font-bold">AI</em>
        </button>

        {/* Navegación (desktop) */}
        <nav className="hidden lg:flex gap-7" aria-label="Navegación principal">
          <button
            className="relative font-bold text-sm text-text-primary py-2 px-0.5 active:text-text-primary after:content-[''] after:absolute after:inset-x-0.5 after:bottom-0 after:h-0.5 after:rounded-sm after:bg-brand-accent"
            onClick={() => alert()}
          >
            
            My Resumes
          </button>
          <button
            className="relative text-sm text-text-muted py-2 px-0.5 hover:text-text-primary hover: font-bold"
            onClick={() => open()}
          >
            Tips
          </button>
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className="hidden sm:inline-flex items-center justify-center gap-2 min-h-[44px] py-3 px-6 rounded-sm border border-border-soft text-text-primary text-sm font-bold tracking-[-0.005em] transition-all duration-180 ease-soft whitespace-nowrap bg-pill hover:bg-pill-hover hover:border-border-strong"
            onClick={reset}
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Resume
          </button>

          <button
            className="hidden sm:grid w-11 h-11 rounded-sm place-items-center bg-transparent border border-transparent text-text-muted hover:text-text-primary hover:bg-pill hover:border-border-soft"
            aria-label="Configuración"
            onClick={() => alert()}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[19px] h-[19px]"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>

          <span className="hidden sm:grid w-[38px] h-[38px] rounded-full bg-gradient-to-br from-brand-accent to-brand-cyan text-bg-primary place-items-center text-xs font-bold">
            MG
          </span>

          {/* Hamburguesa (móvil) */}
          <button
            className="lg:hidden w-11 h-11 rounded-sm grid place-items-center bg-transparent border border-transparent text-text-muted hover:text-text-primary hover:bg-pill hover:border-border-soft"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined text-[22px]">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="lg:hidden absolute top-header inset-x-0 bg-bg-primary border-b border-border-glass shadow-glass">
          <nav
            className="max-w-[1440px] mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Navegación móvil"
          >
            <button
              className="flex items-center justify-between text-left px-4 py-3 rounded-sm border border-transparent text-sm font-bold text-brand-accent transition-all duration-180 ease-soft hover:border-brand-accent hover:shadow-glow-green"
              onClick={() => handleNav(() => alert())}
            >
              My Resumes
              <span className="material-symbols-outlined text-[18px] text-brand-accent">folder</span>
            </button>
            <button
              className="flex items-center justify-between text-left px-4 py-3 rounded-sm border border-transparent text-sm text-brand-accent transition-all duration-180 ease-soft hover:border-brand-accent hover:shadow-glow-green"
              onClick={() => handleNav(() => open())}
            >
              Tips
              <span className="material-symbols-outlined text-[18px] text-brand-accent">lightbulb</span>
            </button>
            <button
              className="lg:hidden flex items-center justify-center gap-2 min-h-[44px] py-3 px-6 mt-2 w-full rounded-sm border border-brand-accent text-brand-accent text-sm font-bold transition-all duration-180 ease-soft bg-pill hover:bg-pill-hover hover:shadow-glow-green"
              onClick={() => handleNav(() => reset())}
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              New Resume
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
