// Import de la bibliothèque Flowbite
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Ajoutez le contenu de Flowbite
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Ajoutez le plugin de Flowbite
    flowbite.plugin(),
  ],
};
