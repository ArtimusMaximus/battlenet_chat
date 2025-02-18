/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'chat-font': ['Verdana', 'Geneva', 'sans-serif']
      },
      backgroundImage: {
        'battlenet': "url('/battle_net_frame.png')",
        'battlenet800': "url('/battle_net_frame_800_600_3.png')",
        'battlenet1024': "url('/battle_net_frame_1024.png')"
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["wireframe", "business", "light", "dark"]
  }
}
