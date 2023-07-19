import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/Fake/'

const CompCreateProduct = () => {
    const [id, setid] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const navigate = useNavigate()

    //procedimietno guardar
    const store = async (e) => {
        e.preventDefault()
        axios.post(URI, { 
            id : id,
            title: title,
            price: price,
            description: description,
            category: category,
            image: image })
        navigate('/Admin')
    }
    return (
        <div>
            <h3>Create POST</h3>
            <form onSubmit={store}>
            <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        value={id}
                        onChange={(e) => setid(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
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
                <button type="submit" className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}
export default CompCreateProduct