import './AllProducts.css';
import { Link } from 'react-router-dom';
import Footer from '../Componentes/Pagina-principal/Footer';
import { ProductContext } from '../Context/ProductContext';
import { useContext, useState } from 'react';

export const AllProducts = () => {
  const { AllProducts, buyProducts } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState(""); // Establecer el valor inicial como una cadena vacía

  const filteredProducts = AllProducts.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSearchSubmit}>
      <div className='search-category'>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar productos"
        />
        <button className='button-allproduct' type='submit'>Buscar</button>
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


