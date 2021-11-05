module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'aileron',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        "Segoe UI",
        'Roboto',
        "Helvetica Neue",
        'Arial',
        "Noto Sans",
        'sans-serif'
      ],
      serif: [
        'IBM Plex Serif',
        'ui-serif',
        'Georgia',
        'Cambria',
        "Times New Roman",
        'Times',
        'serif'
      ],
      mono: [
        'IBM Plex Mono', 
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        "Liberation Mono",
        "Courier New",
        'monospace'
      ]
    },
    colors: {
      'primary': 'var(--ghost-accent-color, #57FF60)',
      'base': '#0A0A0A',
      'border': '#DDDDDD',
      'background': '#FFFFFF',
      'success': '#80B912',
      'error': '#F05230',
      'primary': '#57FF60',
      'secondary': '#645CFF',
      'secondary-alt': '#E73668',
      'white': '#FFFFFF',
      'lime': '#57FF60',
      'blue': '#645CFF',
      'pink': '#E73668'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
