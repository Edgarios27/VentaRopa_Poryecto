import React, { useState, useEffect, useContext } from 'react';
import './Descripcion.css';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from '../Context/ProductContext';
import Footer from '../Componentes/Pagina-principal/Footer';

export const Descripcion = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const { AllProducts, buyProducts } = useContext(ProductContext); 

  useEffect(() => {
    const selectedProduct = AllProducts.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);
  }, [AllProducts, id]);



  return (
    <>
    <div>
      {product && (
        <div className="container">
          <div className="imagenProducto">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="detalle">
            <h2>{product.title}</h2>
            <h3>€{product.price}</h3>
            <p>{product.description}</p>
            <button onClick={() => buyProducts(product)}>AGREGAR AL CARRITO</button>
            <Link className='volver' to="/AllProducts">Volver</Link>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default Descripcion;





