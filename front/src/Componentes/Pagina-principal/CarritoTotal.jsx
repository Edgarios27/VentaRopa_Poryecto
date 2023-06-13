import { ProductContext } from '../../Context/ProductContext';
import { useContext } from 'react';
 
const CarritoTotal = () => {
    const { cart } = useContext(ProductContext);

    const total = cart.reduce((acc,el)=> acc + el.price * el.quanty, 0);
    const totalTruncado = Number.parseFloat(total).toFixed(2);
  return (
    <div className='carritoTotal'>
        <h3>Total a pagar: €{totalTruncado} </h3>
    </div>
  )
}

export default CarritoTotal