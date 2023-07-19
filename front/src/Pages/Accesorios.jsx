import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Componentes/Pagina-principal/Footer';
import { ProductContext } from '../Context/ProductContext';

export const Accesorios = () => {
  const { AllProducts, cart, setCart } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const buyProducts = (product) => {
    console.log(product);
    const productExist = cart.find((item) => item.id === product.id);
  
    if (productExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quanty: productExist.quanty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };
  const filteredProducts = AllProducts.filter((product) => {
    return (
      product.category.toLowerCase().includes('jewelery') ||
      product.category.toLowerCase().includes('electronics')
    ) && (
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate('/Accesorios', {
        state: searchTerm,
      });
    }
  };

  return (
    <div>
      <h2 className='page'>ACCESORIOS</h2>
      <form onSubmit={onSearchSubmit}>
        <div className='search-category'>
          <input
            type='text'
            placeholder='Buscar productos'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='button' type='submit'>Buscar</button>
        </div>
      </form>
      <div className='content'>
        {filteredProducts.map((product) => (
          <div className='card el-wrapper' key={product.id}>
            <div className='box-up'>
              <Link to={`/Descripcion/${product.id}`}>
                <img className='img' src={product.image} alt={product.title} />
              </Link>
              <div className='info-inner'>
                <Link to={`/Descripcion/${product.id}`}>
                  <span className='p-name'>{product.title}</span>
                </Link>
              </div>
            </div>
            <div className='card-body box-down'>
              <div className='h-bg'>
                <div className='h-bg-inner'></div>
                <a
                  className='cart'
                  href='*'
                  onClick={(e) => {
                    e.preventDefault();
                    buyProducts(product);
                  }}
                >
                  <span className='price'>{product.price}€</span>
                  <span className='add-to-cart'>
                    <span className='txt'>Agregar al carrito</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};