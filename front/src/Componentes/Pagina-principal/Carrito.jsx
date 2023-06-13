import { ProductContext } from '../../Context/ProductContext';
import { useContext } from 'react';
import CarritoElementos from "./CarritoElementos";
import CarritoTotal from "./CarritoTotal";
import empty from './img-header/empty.jpg';
import { Link } from 'react-router-dom';
import Footer from "./Footer"

const Carrito = () => {
  const { cart } = useContext(ProductContext);

 
  return cart.length > 0 ? (
  <>
     <Link className='volver' to="/AllProducts">Volver</Link>
     <CarritoElementos />
     <CarritoTotal />
     <Footer />
  </>
  ):(
    <>
    
    <div className='car-empty'>
      <img src={empty} alt="img-empty" />
      <p className='empty'>No hay productos en el carrito</p>
      <Link className='volver' to="/AllProducts">Volver</Link>
    </div>
    <Footer />
  </>
  )
};

export default Carrito;
