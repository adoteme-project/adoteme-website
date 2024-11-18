export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'], 
      },
      colors: {
        'amarelo': '#FFC55E',
        'amarelo-select': '#FFBB1C', 
        'azul-main': '#4C8EB5',
        'azul-light': '#B2DED3',
        'azul-dark': '#05112E',
        'verde': '#C6D668',
        'verde-border': '#A9B949',
        'cinza': '#B0ADA8',
        'vermelho': '#EC5A49',
        'beje': '#FDF6F0',
        'branco': '#FFFFFF',
        'titulo': '#1B1B1B',
        'preto': '#000000',
        'input-d': '#FFDFC4',
        'ong-color-bg': '#FFF1E4',
        'ong-div': '#FFDFC4'
      },
    },
  },
  plugins: [],
}
