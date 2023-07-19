import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel.js';
import dotenv from 'dotenv';
dotenv.config(); // Carga las variables de entorno desde el archivo .env
// Get all users

console.log(process.env.JWT_SECRET);

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
// Función de registro
export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Comprobar si el usuario ya existe en la base de datos
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }
        // Encriptar la contraseña antes de guardarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 12);
        // Crear un nuevo objeto de usuario
        const newUser = new UserModel({
            username,
            email,
            password: hashedPassword,
        });
        // Guardar el usuario en la base de datos
        await newUser.save();
        res.status(201).json({ message: 'Usuario creado correctamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
// Función de inicio de sesión
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Comprobar si el usuario existe en la base de datos
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Email o contraseña incorrectos' });
        }
        // Comparar la contraseña con la contraseña encriptada en la base de datos
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Email o contraseña incorrectos' });
        }
        // Crear un token JSON Web Token (JWT) para el usuario
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};