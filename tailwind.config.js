module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f6ff',
          500: '#7c3aed'
        },
        partyPurple: '#2b0b4a'
      },
      keyframes: {
        pulseGlow: {
          '0%': { boxShadow: '0 0 0px rgba(255,255,255,0.15)' },
          '50%': { boxShadow: '0 0 20px rgba(255,192,203,0.25)' },
          '100%': { boxShadow: '0 0 0px rgba(255,255,255,0.15)' }
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 2s infinite'
      }
    }
  },
  plugins: []
}
