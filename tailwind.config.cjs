/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // eslint-disable-next-line
        "primary": "#5E44FF",
        "primary-light": "#5062FF",
        "primary-light-extra": "#A4B8FF",
        "light-gray": "#B0B3B7"
      },
      fontFamily: {
        lora: "'Lora', serif",
        spaceGrotesk: "'Space Grotesk', serif"
      }
    }
  },
  plugins: []
};
