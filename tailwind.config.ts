import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "https://res.cloudinary.com/mindset/image/upload/v1716194383/Frame_401_oupibi.png",
        "footer": "https://res.cloudinary.com/mindset/image/upload/v1716194379/Rectangle_21838_d3phjv.png",
        "product": "https://res.cloudinary.com/mindset/image/upload/v1716194382/Frame_400_xgstsu.png",
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
