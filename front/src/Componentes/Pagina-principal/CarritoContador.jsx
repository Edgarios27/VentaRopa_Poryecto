import { ProductContext } from '../../Context/ProductContext';
import { useContext } from 'react';

const CarritoContador = () => {
    const { cart } = useContext(ProductContext);

    const itemsQuanty = cart.reduce((acc, el) => acc + el.quanty, 0);
  return <span className='cart-items-total'>{itemsQuanty}</span>
}

export default CarritoContador