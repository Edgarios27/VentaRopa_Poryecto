import React, { useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext';
import './Carrito.css';
import CarritoCantidadProducto from './CarritoCantidadProducto';

const CarritoElementos = () => {
  const { cart, setCart } = useContext(ProductContext);

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);
    const newCart = cart.filter((element) => element !== foundId);
    setCart(newCart);
  };

  return (
    <div className="car-container">
      {cart.map((per) => (
        <div className="car-product" key={per.id}>
          <img className="car-img" src={per.image} alt={per.title} />
          <h2>{per.title}</h2>
          <CarritoCantidadProducto per={per} />
          <h3>€{per.price * per.quanty}</h3>
          <button className="car-close-product" onClick={() => deleteProduct(per.id)}>❌</button>
        </div>
      ))}
    </div>
  );
};

export default CarritoElementos;


