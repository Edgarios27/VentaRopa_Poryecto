import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controller/productController.js'
import { getAllUsers, getUser, createUser, updateUser, deleteUser, loginUser } from '../controller/productModelLogin.js'

export const productRoutes = express.Router()

productRoutes.get('/', getAllProducts,)
productRoutes.get('/:id', getProduct)
productRoutes.post('/', createProduct)
productRoutes.put('/:id', updateProduct)
productRoutes.delete('/:id', deleteProduct)

export const loginRoutes = express.Router()

loginRoutes.get('/', getAllUsers);
loginRoutes.get('/:id', getUser);
loginRoutes.post('/', createUser);
loginRoutes.post('/login', loginUser); // Ruta para iniciar sesión
loginRoutes.put('/:id', updateUser);
loginRoutes.delete('/:id', deleteUser);



