module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primaryColor: '#258AFF',
      },
      screens: {
        largeTablet: { max: '1500px' },
        // => @media (max-width: 1500px) { ... }

        tablet: { max: '800px' },
        // => @media (max-width: 800px) { ... }

        smallTablet: { max: '600px' },
        // => @media (max-width: 600px) { ... }

        phone: { max: '450px' },
        // => @media (max-width: 350px) { ... }
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
