const { spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined, // This "hack" ensures your IDE detects all normal.
  purge: ['./index.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: spacing[6],
        screens: {
          sm: '100%',
          md: '640px',
          lg: '960px',
          xl: '1220px',
        },
      },
      screens: {
        dlg: { max: '1023px' },
        dmd: { max: '767px' },
      },
      flex: {
        2: '2 1 0%',
        3: '3 1 0%',
      },
      maxWidth: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      maxHeight: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
      minWidth: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
      },
      minHeight: {
        'min-content': 'min-content',
        'max-content': 'max-content',
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        '4/5': '80vh',
      },
      inset: {
        '1/2': '50%',
        '-1/2': '-50%',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      backgroundColor: ['odd', 'before', 'after'],
      borderRadius: ['before', 'after'],
      inset: ['before', 'after'],
      position: ['before', 'after'],
      zIndex: ['before', 'after'],
      backgroundOpacity: ['before', 'after'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-pseudo-selectors'),
  ],
};
