import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Admin/Administrador.css'

const URI = 'http://localhost:8000/Fake/'

const Administrador = () => {
  const [Fake, setFake] = useState([])
  useEffect(() => {
    getFake()
  }, [])
  //Procedimiento para mostrar todos los blogs
  const getFake = async () => {
    const res = await axios.get(URI)
    setFake(res.data)
  }
  //procedimiento para eliminar un producto
  const deleteProduct = async (id) => {
    await axios.delete(`${URI}${id}`)
    getFake()
  }



  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to="/create" className='btn btn-primary mt-2 -mb-2'><i className="fa-solid fa-plus"></i></Link>
          <table className='table'>
            <thead className='table-primary'>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>price</th>
                <th>description</th>
                <th>category</th>
                <th>image</th>
              </tr>
            </thead>
            <tbody>
              {Fake.map((product, index) => (
                <tr key={index}>
                  <td>{product._id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>{product.image}</td>
                  <td>
                    <Link to={`/edit/${product._id}`} className='btn btn-info'><i className="fa-solid fa-pen-to-square"></i></Link>
                    <button onClick={() => deleteProduct(product._id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Administrador