module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        light_green: { 700: "#63a810" },
        white: { A700: "#ffffff" },
        blue_gray: { 100: "#d9d9d9", 900: "#2c2c2c", "900_7f": "#2c2c2c7f", "900_01": "#303030" },
        gray: { 50: "#f9f9f9", 900: "#2a2a2a", "900_7f": "#2a2a2a7f" },
        black: { 900: "#000000" },
        red_A700: "#ff0000",
      },
      boxShadow: {
        xs: "0px 7px 15px 0px #ffffff26",
        sm: "0px 4px 30px 0px #0000000c",
        md: "0px 4px 4px 0px #0000003f",
      },
      fontFamily: { dmsans: "DM Sans", poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
