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
        // ── Sharp geometric display face for headlines — the "terminal" voice ──
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        // ── Monospace for addresses, hashes, ledger data — the "on-chain" voice ──
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'headline-xl':  ['64px', { lineHeight: '64px',  letterSpacing: '-0.03em', fontWeight: '700' }],
        'headline-lg':  ['36px', { lineHeight: '42px',  letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md':  ['24px', { lineHeight: '30px',  fontWeight: '700' }],
        'headline-sm':  ['19px', { lineHeight: '26px',  fontWeight: '700' }],
        'headline-lg-mobile': ['34px', { lineHeight: '38px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body-lg':  ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md':  ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm':  ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-lg': ['13px', { lineHeight: '18px', fontWeight: '700', letterSpacing: '0.02em' }],
        'label-sm': ['11px', { lineHeight: '15px', fontWeight: '700', letterSpacing: '0.06em' }],
      },
      colors: {
        // ── Void + Signal — deep black terminal with cyan/magenta duotone circuitry ──
        primary:               '#07060C',   // near-black void
        'primary-container':   '#0F0D1A',   // elevated void surface
        'on-primary':          '#EAF6FF',
        'on-primary-container':'#7C8AB8',
        'primary-fixed':       '#1B1830',
        'primary-fixed-dim':   '#14111F',
        'on-primary-fixed':    '#EAF6FF',
        'on-primary-fixed-variant': '#4A4E75',
        'inverse-primary':     '#C6B8F0',

        secondary:                 '#003842',   // deep signal teal
        'secondary-container':     '#00F0FF',   // electric cyan accent (primary signal)
        'on-secondary':            '#00181C',
        'on-secondary-container':  '#00232A',
        'secondary-fixed':         '#9FFBFF',
        'secondary-fixed-dim':     '#4EF5FF',
        'on-secondary-fixed':      '#00181C',
        'on-secondary-fixed-variant': '#004650',

        tertiary:                 '#2B0035',
        'tertiary-container':     '#FF2ED1',   // magenta second signal
        'on-tertiary':            '#ffffff',
        'on-tertiary-container':  '#FF9CF0',
        'tertiary-fixed':         '#FFD6F7',
        'tertiary-fixed-dim':     '#FF8CE8',
        'on-tertiary-fixed':      '#3A0040',
        'on-tertiary-fixed-variant': '#8A0090',

        // ── Surfaces — this product is dark-native, "background" IS the void ──
        background:                 '#07060C',
        'on-background':            '#EAF6FF',
        surface:                    '#07060C',
        'on-surface':               '#EAF6FF',
        'surface-variant':          '#171426',
        'on-surface-variant':       '#8B8FB8',
        'surface-bright':           '#171426',
        'surface-dim':              '#050409',
        'surface-container-lowest': '#050409',
        'surface-container-low':    '#0B0913',
        'surface-container':        '#100D1C',
        'surface-container-high':   '#171326',
        'surface-container-highest':'#1F1A32',
        'inverse-surface':          '#EAF6FF',
        'inverse-on-surface':       '#100D1C',
        'surface-tint':             '#00F0FF',

        // ── Utility ──────────────────────────────────────────────────────────────
        outline:          '#3A3652',
        'outline-variant':'#211D35',
        error:            '#FF4D6A',
        'on-error':       '#1A0006',
        'error-container':'#2E0510',
        'on-error-container': '#FF9CB3',

        // ── Brand-specific ────────────────────────────────────────────────────────
        'auction-live':     '#FF2ED1',   // magenta – live pulse
        'auction-upcoming': '#00F0FF',   // cyan – upcoming
        'gold-service':     '#FFB800',   // amber premium
        'success-green':    '#39FF88',   // settled/success signal

        cream: {
          50:  '#EAF6FF',
          100: '#171426',
          200: '#100D1C',
          300: '#211D35',
          400: '#8B8FB8',
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
        'card-hover': '0px 16px 40px rgba(0, 240, 255, 0.10)',
        'auction':    '0 2px 12px rgba(0, 0, 0, 0.4)',
        'neon':       '0 0 0 1px rgba(0,240,255,0.5), 0 0 24px rgba(0,240,255,0.35)',
        'neon-lg':    '0 0 0 1px rgba(0,240,255,0.6), 0 0 56px rgba(0,240,255,0.45)',
        'chip':       '0 8px 24px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)',
        'magenta':    '0 0 0 1px rgba(255,46,209,0.45), 0 0 32px rgba(255,46,209,0.3)',
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
        'pulse-line': {
          '0%':   { strokeDashoffset: '400' },
          '100%': { strokeDashoffset: '0' },
        },
        'scan': {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '92%':      { opacity: '1' },
          '93%':      { opacity: '0.4' },
          '94%':      { opacity: '1' },
          '96%':      { opacity: '0.6' },
          '97%':      { opacity: '1' },
        },
      },
      animation: {
        'drift-a': 'drift-a 7s ease-in-out infinite',
        'drift-b': 'drift-b 9s ease-in-out infinite',
        'drift-c': 'drift-c 8s ease-in-out infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
        'pulse-line': 'pulse-line 3.5s linear infinite',
        'scan': 'scan 6s linear infinite',
        'flicker': 'flicker 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
