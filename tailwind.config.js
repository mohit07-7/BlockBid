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
        // ── Ledger identity: warm editorial serif for headlines, mono for bids/hashes ──
        display: ['"Fraunces"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'headline-xl':  ['56px', { lineHeight: '60px',  letterSpacing: '-0.03em', fontWeight: '800' }],
        'headline-lg':  ['34px', { lineHeight: '42px',  letterSpacing: '-0.02em', fontWeight: '800' }],
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
        // ── "Auction Ledger" — warm ink + brass gold, cobalt & claret status accents ──
        primary:               '#171310',   // rich espresso-ink (warm near-black)
        'primary-container':   '#241E17',
        'on-primary':          '#F6F3EC',
        'on-primary-container':'#C9BBA0',
        'primary-fixed':       '#EFE6D6',
        'primary-fixed-dim':   '#D9C9A8',
        'on-primary-fixed':    '#171310',
        'on-primary-fixed-variant': '#5C503C',
        'inverse-primary':     '#D9C9A8',

        secondary:                 '#4A3607',
        'secondary-container':     '#C89B3C',   // brass / gavel gold accent
        'on-secondary':            '#1F1503',
        'on-secondary-container':  '#3A2A08',
        'secondary-fixed':         '#F0DBA8',
        'secondary-fixed-dim':     '#DCB86A',
        'on-secondary-fixed':      '#241902',
        'on-secondary-fixed-variant': '#5C4413',

        tertiary:                 '#0B1F45',
        'tertiary-container':     '#1B3E7A',
        'on-tertiary':            '#ffffff',
        'on-tertiary-container':  '#9DB8E8',
        'tertiary-fixed':         '#D6E2FF',
        'tertiary-fixed-dim':     '#AFC4F2',
        'on-tertiary-fixed':      '#0B1F45',
        'on-tertiary-fixed-variant': '#2A468C',

        // ── Surfaces — warm paper (light) ─────────────────────────────────────────
        background:                 '#F6F3EC',
        'on-background':            '#171310',
        surface:                    '#F6F3EC',
        'on-surface':               '#171310',
        'surface-variant':          '#E6DFCC',
        'on-surface-variant':       '#5C543F',
        'surface-bright':           '#F6F3EC',
        'surface-dim':              '#DED4B8',
        'surface-container-lowest': '#ffffff',
        'surface-container-low':    '#F1ECDE',
        'surface-container':        '#EAE2CC',
        'surface-container-high':   '#E1D6B9',
        'surface-container-highest':'#D6C9A5',
        'inverse-surface':          '#241E17',
        'inverse-on-surface':       '#F1ECDE',
        'surface-tint':             '#B8862E',

        // ── Utility ──────────────────────────────────────────────────────────────
        outline:          '#8A7F65',
        'outline-variant':'#D6C9A5',
        error:            '#B3261E',
        'on-error':       '#ffffff',
        'error-container':'#F9DEDC',
        'on-error-container': '#410E0B',

        // ── Brand-specific status colors ────────────────────────────────────────
        'auction-live':     '#A63446',   // claret — live badge
        'auction-upcoming': '#3454D1',   // cobalt — upcoming
        'gold-service':     '#C89B3C',   // brass — premium
        'success-green':    '#3F7D5C',   // settled/success (muted, not neon)

        // ── Legacy aliases kept so older components don't break ──────────────────
        cream: {
          50:  '#ffffff',
          100: '#F6F3EC',
          200: '#EAE2CC',
          300: '#D6C9A5',
          400: '#8A7F65',
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
        'card-hover': '0px 12px 32px rgba(23, 19, 16, 0.16)',
        'auction':    '0 2px 12px rgba(23, 19, 16, 0.08)',
        'neon':       '0 0 0 1px rgba(184,134,46,0.4), 0 0 24px rgba(184,134,46,0.22)',
        'neon-lg':    '0 0 0 1px rgba(184,134,46,0.5), 0 0 40px rgba(184,134,46,0.32)',
        'chip':       '0 8px 24px rgba(23, 19, 16, 0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%':      { transform: 'translateY(-10px) rotate(1.5deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%':      { transform: 'translate(-16px, 12px)' },
        },
        // ── Ticker-rail — the signature "auction clerk's tape" scroll ──
        'ticker-scroll': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'ticker': 'ticker-scroll 34s linear infinite',
      },
    },
  },
  plugins: [],
};
