module.exports = {
    purge: {
      content: [
        './src/**/*.tsx',
        './src/index.html',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
          fontWeight: {
            thin: '100',
            hairline: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            'extra-bold': '800',
            black: '900',
          },
          colors: {
            "white-rgba": "rgba(255, 255, 255, 1)",
            "green-rgba": "rgba(0, 77, 90, 1)",
            'gray-rgba':'rgba(153, 153, 153, 1)',
            'light-black-rgba':'rgba(51, 51, 51, 1)',
            'light-gray-rgba':'rgba(238, 238, 238, 0.25)',
            'light-green-rgba':'rgba(186, 243, 230, 1)',
            'light-green-rgba-2': 'rgba(186, 243, 230, 0.15)',
    
          },
        },
      },
    variants: {
      extend: {},
    },
    plugins: [],
  }