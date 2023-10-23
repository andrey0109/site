module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        // Define your custom font family with variations
        'fa-classic': ['Font Awesome 6 Free', 'sans'],
      },
      backgroundColor: {
        'dark': '#000',
        'dark-secondary': '#111',
      },
      colors: {
        green: {
          '100': '#F0FFF4',
          '200': '#C6F6D5',
          '300': '#9AE6B4',
          '400': '#68D391',
          '500': '#48BB78', 
          '600': '#38A169',
          '700': '#2F855A',
          '800': '#276749',
          '900': '#22543D',
        },
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    // You can enable the `box-sizing` utility if you haven't already
    boxSizing: false,
  },
}

