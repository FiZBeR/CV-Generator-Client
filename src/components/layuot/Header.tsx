interface HeaderProp {
  reset: () => void;
  open: () => void;
  alert: () => void;
}

const Header = ({ reset, open, alert }: HeaderProp) => {
  return (
    <header style={{ marginBottom: 0 }} className="sticky top-0 !mb-0 z-20 bg-bg-primary/72 backdrop-blur-glass border-b border-border-glass h-header">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between gap-gap px-12">
        {/* Brand */}
        <button className="inline-flex items-center gap-2.5 font-display font-bold text-[19px] tracking-[-0.02em] text-text-primary">
          <span className="relative w-6 h-6 rounded-sm bg-gradient-to-br from-brand-accent to-brand-cyan shadow-[0_0_18px_var(--color-glow-green)]">
            <span className="absolute inset-2 rounded-sm bg-bg-primary"></span>
          </span>
          Resume<em className="not-italic text-brand-accent font-bold">AI</em>
        </button>

        {/* Navegación */}
        <nav className="flex gap-7" aria-label="Navegación principal">
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
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center gap-2 min-h-[44px] py-3 px-6 rounded-sm border border-border-soft text-text-primary text-sm font-bold tracking-[-0.005em] transition-all duration-180 ease-soft whitespace-nowrap bg-pill hover:bg-pill-hover hover:border-border-strong"
            onClick={reset}
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Resume
          </button>

          <button
            className="w-11 h-11 rounded-sm grid place-items-center bg-transparent border border-transparent text-text-muted hover:text-text-primary hover:bg-pill hover:border-border-soft"
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

          <span className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-brand-accent to-brand-cyan text-bg-primary grid place-items-center text-xs font-bold">
            MG
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
