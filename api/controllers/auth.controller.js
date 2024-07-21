import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  // Vérification des champs requis
  if (
    !username ||
    !password ||
    !email ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "Tous les champs sont requis" });
  }

  try {
    // Hachage du mot de passe avec bcryptjs
    const hashedPassword = await bcryptjs.hashSync(password, 10); // 10 est le nombre de tours de hachage (salt rounds)

    // Création d'une nouvelle instance de User avec les données fournies, y compris le mot de passe haché
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Tentative de sauvegarde du nouvel utilisateur dans la base de données
    await newUser.save();

    // Réponse en cas de succès
    res.status(201).json({ message: "Utilisateur créé avec succès" });
  } catch (err) {
    // Gestion des erreurs de sauvegarde
    res.status(500).json({ message: err.message });
  }
};
