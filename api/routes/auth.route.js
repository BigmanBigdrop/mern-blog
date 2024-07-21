import express from "express";
import { signup } from "../controllers/auth.controller.js"; // Importation du contrôleur de l'authentification

const router = express.Router(); // Création d'un routeur Express

// Route POST pour l'inscription des utilisateurs
// Cette route écoute les requêtes POST envoyées à /signup et appelle la fonction signup du contrôleur
router.post("/signup", signup);

export default router; // Exportation du routeur pour qu'il soit utilisé dans d'autres parties de l'application
