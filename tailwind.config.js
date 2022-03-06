module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    height: {
      fullv:'100vh',
       md : '400px',
       lg: '500px',
       xl: '600px'
    },
    // width: {
    //   md:'400px',
    //   lg:'600px'
    // },
    extend: {
      colors : {
        reset : 'hsl(172, 67%, 45%)',
        dark : 'hsl(183, 100%, 15%)',
        input : {
          100 : 'hsl(186, 14%, 43%)',
          200 : 'hsl(184, 14%, 56%)',
          300 : 'hsl(185, 41%, 84%)',
          400: 'hsl(189, 41%, 97%)'
        },
      },
      fontFamily : {
        primary : "'Space Mono', monospace"
      }
    },
  },
  plugins: [],
}

// - Family: [Space Mono](https://fonts.google.com/specimen/Space+Mono)
// - Weights: 700