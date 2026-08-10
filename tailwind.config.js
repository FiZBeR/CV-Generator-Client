export default {
    darkMode: "class",
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./modals/**/*.{js,ts,jsx,tsx}",
    ],
      theme: {
    extend: {
      // ─── Paleta de colores ─────────────────────────────
      colors: {
        // fondo
        'bg-primary': '#050505',        // --bg
        'bg-surface': '#0b0b0f',        // --surface
        'bg-glass': 'rgba(11, 15, 25, 0.5)', // --glass-bg
        
        // texto
        'text-primary': '#ffffff',      // --fg
        'text-muted': '#9ca3af',        // --muted
        
        // acentos neón
        'brand-accent': '#00ff66',      // --accent
        'brand-cyan': '#00ccff',        // --cyan
        
        // bordes / strokes (derivados de mix)
        'border-glass': 'rgba(255,255,255,0.10)',    // --glass-border
        'border-accent': 'rgba(0,255,102,0.30)',     // --glass-border-accent
        'border-hairline': 'rgba(255,255,255,0.10)', // --hairline
        'border-soft': 'rgba(255,255,255,0.14)',     // --stroke-soft
        'border-strong': 'rgba(255,255,255,0.26)',   // --stroke-strong
        
        // overlays
        'img-overlay': 'rgba(0,0,0,0.6)',            // --img-overlay
        
        // efectos
        'pill': 'rgba(255,255,255,0.04)',            // --pill
        'pill-hover': 'rgba(255,255,255,0.08)',      // --pill-hover
        'glow-green': 'rgba(0,255,102,0.15)',        // --glow-green
        'ink-soft': 'rgba(5,5,5,0.55)',              // --ink-soft (bg al 55% sobre texto)
        'ink-line': 'rgba(5,5,5,0.12)',              // --ink-line
      },
      
      // ─── Tipografías ──────────────────────────────────
      fontFamily: {
        'display': ['Space Grotesk', 'Segoe UI Variable Display', 'Segoe UI', 'system-ui', '-apple-system', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'body': ['Aptos', 'Segoe UI Variable Text', 'Segoe UI', 'system-ui', '-apple-system', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'mono': ['ui-monospace', 'Cascadia Code', 'SF Mono', 'JetBrains Mono', 'Menlo', 'Consolas', 'monospace'],
      },
      
      // ─── Tamaños de fuente ──────────────────────────────
      fontSize: {
        'h2': 'clamp(28px, 2.6vw, 36px)',
        'lead': '16px',
        'body': '15px',
        'meta': '12px',
      },
      
      // ─── Geometría (border-radius) ──────────────────────
      borderRadius: {
        'none': '0px',
        'sm': '2px',        // --radius
        'lg': '0px',        // --radius-lg (override para paneles)
        'xl': '0px',
        '2xl': '0px',
        '3xl': '0px',
      },
      
      // ─── Sombras ─────────────────────────────────────────
      boxShadow: {
        'glass': '0 20px 50px rgba(0,0,0,0.8)',          // --glass-shadow
        'glow-green': '0 0 20px rgba(0,255,102,0.4)',     // hover btn-primary
        'inner-glow': 'inset 0 0 16px rgba(0,255,102,0.12)', // focus textarea
      },
      
      // ─── Backgrounds ────────────────────────────────────
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00ff66, #00ccff)',
        'gradient-to-top': 'linear-gradient(to top, #050505 72%, transparent)',
      },
      
      // ─── Backdrop blur ──────────────────────────────────
      backdropBlur: {
        'glass': '20px',
        'glass-sm': '12px',
        'overlay': '8px',
      },
      
      // ─── Espaciados ─────────────────────────────────────
      spacing: {
        'header': '72px',      // --header-h
        'gap': '24px',         // --gap
      },
      
      // ─── Transiciones ───────────────────────────────────
      transitionDuration: {
        '180': '180ms',
      },
      transitionTimingFunction: {
        'ease-soft': 'ease',
      },
      
      // ─── Filtros (opcional) ────────────────────────────
      brightness: {
        'glass': '0.72',       // para el header
      },
    },
  },
  plugins: []
}

