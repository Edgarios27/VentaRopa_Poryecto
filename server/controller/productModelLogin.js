import { productLoginModel } from '../models/productModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Mostrar todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const users = await productLoginModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al mostrar todos los registros' });
  }
};

// Mostrar un usuario
export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await productLoginModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al mostrar todos los registros' });
  }
};

// Crear un usuario
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Comprobar si el usuario ya existe en la base de datos
    const user = await productLoginModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }
    // Encriptar la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea el nuevo usuario en la base de datos
    const newUser = new productLoginModel({
      name,
      email,
      password: hashedPassword,
    });
    // Guardar el usuario en la base de datos
    await newUser.save();

    // Genera el token JWT
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

    res.status(201).json({ message: 'Usuario creado correctamente', token });
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Iniciar sesión de usuario
export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      // Comprobar si el usuario existe en la base de datos
      const user = await productLoginModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Email o contraseña incorrectos' });
      }
      // Comparar la contraseña con la contraseña encriptada en la base de datos
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Email o contraseña incorrectos' });
      }
      // Verificar si el usuario es un administrador
      const isAdmin = user.isAdmin;
      // Crear un token JSON Web Token (JWT) para el usuario
      const token = jwt.sign({ userId: user._id, isAdmin }, process.env.JWT_SECRET);
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  

// Actualizar un usuario
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, password } = req.body;

    // Verifica si el campo de contraseña está presente
    if (password) {
      // Si la contraseña está presente, no se permite modificarla
      res.status(400).json({ message: 'No se permite modificar la contraseña' });
      return;
    }

    await productLoginModel.findByIdAndUpdate(id, { name, email });
    res.status(200).json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Eliminar un usuario
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await productLoginModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.json({ message: error.message });
  }
};
