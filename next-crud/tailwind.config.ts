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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(gray|green|blue)-(100|200|300|400|700)/,
      variants: ["lg", "hover", "focus", "lg:hover"],
    },
    {
      pattern: /from-(gray|green|blue)-(100|200|300|400|700)/,
    },
    {
      pattern: /to-(gray|green|blue)-(100|200|300|400|700)/,
    },
  ],
};
export default config;
