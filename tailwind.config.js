import typography from '@tailwindcss/typography';
import { theme } from '~/all';
// import 'deepmerge';
// import '@headlessui/react';

const config = {
  darkMode: 'class',
  theme,
  // This plugin is used for the documentation files
  plugins: [typography],
};

export default config;
