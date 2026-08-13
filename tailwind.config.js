/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        // ── New: aggressive uppercase display face for headlines/signatures ──
        display: ['"Anton"', 'sans-serif'],
      },
      fontSize: {
        'headline-xl':  ['56px', { lineHeight: '60px',  letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-lg':  ['34px', { lineHeight: '42px',  letterSpacing: '-0.01em', fontWeight: '800' }],
        'headline-md':  ['24px', { lineHeight: '32px',  fontWeight: '700' }],
        'headline-sm':  ['20px', { lineHeight: '28px',  fontWeight: '700' }],
        'headline-lg-mobile': ['30px', { lineHeight: '38px', fontWeight: '800' }],
        'body-lg':  ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md':  ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm':  ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '20px', fontWeight: '700' }],
        'label-sm': ['11px', { lineHeight: '16px', fontWeight: '700' }],
      },
      colors: {
        // ── Blood Red + Void Black — intense, high-contrast identity ─────────────
        primary:               '#0A0505',
        'primary-container':   '#1A0808',
        'on-primary':          '#FFF1F1',
        'on-primary-container':'#D98C90',
        'primary-fixed':       '#3D0F12',
        'primary-fixed-dim':   '#2A0A0C',
        'on-primary-fixed':    '#FFEAEA',
        'on-primary-fixed-variant': '#7A2226',
        'inverse-primary':     '#FF1B3D',

        secondary:                 '#5C000E',
        'secondary-container':     '#FF1B3D',   // electric red accent (was lime)
        'on-secondary':            '#1A0002',
        'on-secondary-container':  '#FFD8DC',
        'secondary-fixed':         '#FFB3BE',
        'secondary-fixed-dim':     '#FF6B7D',
        'on-secondary-fixed':      '#3D0007',
        'on-secondary-fixed-variant': '#7A0014',

        tertiary:                 '#2A0000',
        'tertiary-container':     '#7A1010',
        'on-tertiary':            '#ffffff',
        'on-tertiary-container':  '#FF8A8A',
        'tertiary-fixed':         '#FFD1D1',
        'tertiary-fixed-dim':     '#FF9E9E',
        'on-tertiary-fixed':      '#3D0000',
        'on-tertiary-fixed-variant': '#7A1A1A',

        // ── Surfaces — near-black by default ────────────────────────────────────
        background:                 '#0A0505',
        'on-background':            '#FFF1F1',
        surface:                    '#0A0505',
        'on-surface':               '#FFF1F1',
        'surface-variant':          '#241010',
        'on-surface-variant':       '#C99FA1',
        'surface-bright':           '#150808',
        'surface-dim':              '#050202',
        'surface-container-lowest': '#000000',
        'surface-container-low':    '#120606',
        'surface-container':        '#1A0808',
        'surface-container-high':   '#220A0A',
        'surface-container-highest':'#2A0D0D',
        'inverse-surface':          '#FFF1F1',
        'inverse-on-surface':       '#1A0808',
        'surface-tint':             '#FF1B3D',

        // ── Utility ──────────────────────────────────────────────────────────────
        outline:          '#7A4145',
        'outline-variant':'#3D1618',
        error:            '#FF3B3B',
        'on-error':       '#ffffff',
        'error-container':'#3D0A0A',
        'on-error-container': '#FFB3B3',

        // ── Brand-specific ────────────────────────────────────────────────────────
        'auction-live':     '#FF0033',   // blood red – live badge
        'auction-upcoming': '#FF7A3D',   // ember orange – upcoming
        'gold-service':     '#FFD23D',   // amber premium
        'success-green':    '#22C55E',   // settled/success

        // ── Legacy aliases kept so old components don't break ────────────────────
        cream: {
          50:  '#000000',
          100: '#0A0505',
          200: '#1A0808',
          300: '#3D1618',
          400: '#7A4145',
        },
      },
      maxWidth: {
        'container-max': '1280px',
      },
      spacing: {
        'gutter':          '1.5rem',
        'margin-mobile':   '1rem',
        'stack-sm':        '0.5rem',
        'stack-md':        '1rem',
        'stack-lg':        '2rem',
        'section-padding': '6rem',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        sm:   '0.125rem',
        md:   '0.375rem',
        lg:   '0.75rem',
        xl:   '1.25rem',
        '2xl':'1.75rem',
        full: '9999px',
      },
      boxShadow: {
        'card-hover': '0px 12px 32px rgba(255,27,61,0.15), 0px 8px 20px rgba(0,0,0,0.55)',
        'auction':    '0 2px 12px rgba(0,0,0,0.5)',
        'neon':       '0 0 0 1px rgba(255,27,61,0.5), 0 0 24px rgba(255,27,61,0.35)',
        'neon-lg':    '0 0 0 1px rgba(255,27,61,0.6), 0 0 56px rgba(255,27,61,0.45)',
        'chip':       '0 8px 24px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      keyframes: {
        'drift-a': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(-4deg)' },
          '50%':      { transform: 'translate(14px, -22px) rotate(3deg)' },
        },
        'drift-b': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(3deg)' },
          '50%':      { transform: 'translate(-18px, 16px) rotate(-2deg)' },
        },
        'drift-c': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(-2deg)' },
          '50%':      { transform: 'translate(10px, 20px) rotate(4deg)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'drift-a': 'drift-a 7s ease-in-out infinite',
        'drift-b': 'drift-b 9s ease-in-out infinite',
        'drift-c': 'drift-c 8s ease-in-out infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
      },
    },
  },
  plugins: [],
};
