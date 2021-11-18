const tailwindcssConfig = require('general-web-components/dist/collection/globals/tailwind.config');
module.exports = {
  ...tailwindcssConfig,
  //...(process.env.NODE_ENV === 'development' && { mode: 'jit' }),
  purge: [
    './*.html',
    './src/**/*.js'
  ],
  theme: {
    ...tailwindcssConfig.theme,
    extend: {
      fontSize: {
        '26': '26px',
      },
      spacing: {
        '18': '18px',
        '300': '300px',
        '380': '380px',
      }
    }
  },
  corePlugins: {
    preflight: false,
  }
}

