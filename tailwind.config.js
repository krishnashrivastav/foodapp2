module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        42: "42px",
        300: "300px",
        340: "340px",
        175: "175px",
        200: "200px",
        420: "420px",
      },
      width: {
        275: "275px",
        300: "300px",
        340: "340px",
        375: "375px",
        250: "250px",
        400: "400px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        headingColor: "#2e2e2e",
        textColor: "#515151",
        cartNumBg: "#e80013",
        primary: "#f5f3f3",
        cardOverlay: "rgba(256,256,256,0.4)",
        lighttextGray: "#9ca0ab",
        card: "rgba(256,256,256,0.8)",
        cartBg: '#282a2c',
        cartItem: "#2e3033",
        cartTotal: "#343739",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
