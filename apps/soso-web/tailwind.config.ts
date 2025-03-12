const sharedConfig = require('@repo/tailwind-config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [...sharedConfig.content, './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...sharedConfig.theme.extend,
    },
  },
  plugins: [...sharedConfig.plugins],
};
