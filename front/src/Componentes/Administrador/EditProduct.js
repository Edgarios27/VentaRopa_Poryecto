import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/Fake/'

const CompEditProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    //procedimiento para editar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${URI}${id}`, {
            title: title,
            price: price,
            description: description,
            category: category,
            image: image
        })
        navigate('/Admin')
    }

    useEffect(() => {
        getProductById()
    },[])

    const getProductById = async () => {
        const res = await axios.get(`${URI}${id}`)
        setTitle(res.data.title)
        setPrice(res.data.price)
        setDescription(res.data.description)
        setCategory(res.data.category)
        setImage(res.data.image)
    }

    return (
        <div>
            <h3>Edit POST</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <textarea
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <textarea
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <textarea
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )

}

export default CompEditProduct