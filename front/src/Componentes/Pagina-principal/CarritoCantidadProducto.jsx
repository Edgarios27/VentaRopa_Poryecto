import { ProductContext } from '../../Context/ProductContext';
import { useContext } from 'react';

const CarritoCantidadProducto = ({ per }) => {
    const { cart, setCart, buyProducts } = useContext(ProductContext);

    const decrese = () => {
        const productrepeat = cart.find((item) => item.id === per.id);

        productrepeat.quanty !== 1 && 
        setCart(cart.map((item) => (item.id === per.id ? { ...per, quanty:productrepeat.quanty - 1 } : item)));
    };

    return (
      <>
        <p className='counter-button' onClick={decrese}>-</p>
        <p className='quanty'>{per.quanty}</p>
        <p className='counter-button' onClick={() => buyProducts(per)}>+</p>
      </>
    )
  }

export default CarritoCantidadProducto