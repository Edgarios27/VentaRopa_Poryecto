import productModel from '../models/productModel.js';

//Mostrar todos los producto
export const getAllProducts = async (req, res) => {
    try {
        const Fake = await productModel.find()
        res.status(200).json(Fake)
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar un producto
export const getProduct = async (req, res) => {
    try {
        const id = req.params.id
        await productModel.findById({_id: id }).then((product) => {
            res.status(200).json(product)
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un producto
export const createProduct = async (req, res) => {
    try {
        await productModel.create(req.body)
        res.status(200).json({
            "message": "¡Blog creado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Actualizar un producto
export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        await productModel.updateOne({ _id: id }, req.body).then(res => {
            console.log(res)
        })
        res.status(200).json({
            "message": "¡blog actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar un producto
export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        await productModel.deleteOne({_id: id }).then(res => {
            console.log(res)
        })
        res.status(200).json({
            "message": "¡blog eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}