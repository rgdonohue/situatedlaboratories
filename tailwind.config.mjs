/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F3EC',
        'paper-dark': '#EFE5D8',
        ink: '#151515',
        'ink-secondary': '#555149',
        teal: '#1E5C57',
        'teal-light': '#2A7A73',
        rust: '#B35632',
        border: '#D0C5B6',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      transitionDuration: {
        base: '150ms',
        slow: '250ms',
      },
    },
  },
  plugins: [],
};
