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
        sans: ['Inter', 'sans-serif'],
        // ── New: clean geometric display face for headlines — not shouty, just sharp ──
        display: ['"Clash Display"', 'Inter', 'sans-serif'],
        // ── New: monospace for tags/labels/addresses — technical web3 feel ──
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'headline-xl':  ['54px', { lineHeight: '58px',  letterSpacing: '-0.03em', fontWeight: '600' }],
        'headline-lg':  ['34px', { lineHeight: '40px',  letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-md':  ['24px', { lineHeight: '30px',  fontWeight: '600' }],
        'headline-sm':  ['19px', { lineHeight: '26px',  fontWeight: '600' }],
        'headline-lg-mobile': ['32px', { lineHeight: '38px', fontWeight: '600' }],
        'body-lg':  ['17px', { lineHeight: '27px', fontWeight: '400' }],
        'body-md':  ['15px', { lineHeight: '23px', fontWeight: '400' }],
        'body-sm':  ['13.5px', { lineHeight: '20px', fontWeight: '400' }],
        'label-lg': ['13px', { lineHeight: '18px', fontWeight: '600' }],
        'label-sm': ['10.5px', { lineHeight: '14px', fontWeight: '600' }],
      },
      colors: {
        // ── Void Black + Crimson — restrained, professional, one accent only ─────
        primary:               '#060606',
        'primary-container':   '#0F0F0F',
        'on-primary':          '#F5F1F1',
        'on-primary-container':'#A89A9A',
        'primary-fixed':       '#1A0C0C',
        'primary-fixed-dim':   '#0F0808',
        'on-primary-fixed':    '#F5F1F1',
        'on-primary-fixed-variant': '#4D2323',
        'inverse-primary':     '#E1122A',

        secondary:                 '#3D0A11',
        'secondary-container':     '#E1122A',   // single controlled crimson accent
        'on-secondary':            '#FFFFFF',
        'on-secondary-container':  '#FFD9DC',
        'secondary-fixed':         '#FF6B78',
        'secondary-fixed-dim':     '#E1122A',
        'on-secondary-fixed':      '#2B0006',
        'on-secondary-fixed-variant': '#7A0D18',

        tertiary:                 '#141414',
        'tertiary-container':     '#242424',
        'on-tertiary':            '#F5F1F1',
        'on-tertiary-container':  '#B8AEAE',
        'tertiary-fixed':         '#2A2A2A',
        'tertiary-fixed-dim':     '#1A1A1A',
        'on-tertiary-fixed':      '#F5F1F1',
        'on-tertiary-fixed-variant': '#3D3D3D',

        // ── Surfaces — true black hierarchy, no color cast ──────────────────────
        background:                 '#060606',
        'on-background':            '#F5F1F1',
        surface:                    '#060606',
        'on-surface':               '#F5F1F1',
        'surface-variant':          '#1C1616',
        'on-surface-variant':       '#9C9090',
        'surface-bright':           '#0F0B0B',
        'surface-dim':              '#040303',
        'surface-container-lowest': '#000000',
        'surface-container-low':    '#0C0A0A',
        'surface-container':        '#121010',
        'surface-container-high':   '#191515',
        'surface-container-highest':'#211B1B',
        'inverse-surface':          '#F5F1F1',
        'inverse-on-surface':       '#121010',
        'surface-tint':             '#E1122A',

        // ── Utility ──────────────────────────────────────────────────────────────
        outline:          '#4D4040',
        'outline-variant':'#221C1C',
        error:            '#FF3B3B',
        'on-error':       '#ffffff',
        'error-container':'#2B0A0A',
        'on-error-container': '#FFB3B3',

        // ── Brand-specific ────────────────────────────────────────────────────────
        'auction-live':     '#E1122A',   // crimson – live badge
        'auction-upcoming': '#5B8CFF',   // cool blue – deliberate contrast, not red-on-red
        'gold-service':     '#E8B84B',   // amber premium
        'success-green':    '#22C55E',   // settled/success

        // ── Legacy aliases kept so old components don't break ────────────────────
        cream: {
          50:  '#000000',
          100: '#060606',
          200: '#121010',
          300: '#221C1C',
          400: '#4D4040',
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
        lg:   '0.625rem',
        xl:   '1rem',
        '2xl':'1.25rem',
        full: '9999px',
      },
      boxShadow: {
        'card-hover': '0px 16px 40px rgba(0,0,0,0.6), 0px 0px 0px 1px rgba(225,18,42,0.08)',
        'auction':    '0 2px 12px rgba(0,0,0,0.5)',
        'neon':       '0 0 0 1px rgba(225,18,42,0.4), 0 4px 20px rgba(225,18,42,0.25)',
        'neon-lg':    '0 0 0 1px rgba(225,18,42,0.5), 0 8px 32px rgba(225,18,42,0.35)',
        'chip':       '0 8px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      keyframes: {
        'drift-a': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(-2deg)' },
          '50%':      { transform: 'translate(10px, -16px) rotate(1deg)' },
        },
        'drift-b': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(1deg)' },
          '50%':      { transform: 'translate(-14px, 12px) rotate(-1deg)' },
        },
        'drift-c': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(-1deg)' },
          '50%':      { transform: 'translate(8px, 14px) rotate(2deg)' },
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
