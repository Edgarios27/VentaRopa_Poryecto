import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { ProductContext } from '../../Context/ProductContext';
import { useContext } from 'react';
import CarritoContador from './CarritoContador';
import './Pagina-principal.css';

export const Header = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  )
}

function Menu() {
  //BUSCADOR
  const { onImputChange, valueSearch, onResetForm } = useContext(ProductContext);

  const navigate = useNavigate()
  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (valueSearch.trim() !== "") {
      navigate('/Busqueda', {
        state: valueSearch,
      });
    }

    onResetForm();
  };

  // CARRITO
  const { cart } = useContext(ProductContext);

  // const [search, setSearch] = useState('');

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  // HAMBURGUESA
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenuOpen = () => {
    setMenuVisible(true);
  };
  const toggleMenuClose = () => {
    setMenuVisible(false)
  }

  // REGISTRO
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones como enviar los datos de registro a un servidor o hacer otras operaciones necesarias
    console.log('Username:', username);
    console.log('Password:', password);
    // Luego puedes cerrar el modal
    handleCloseModal();

  };
  // return (
  //   <div className="menu">
  //     <div className="header">
  //       {/* HAMBURGUESA */}
  //       <div className="burger-menu">
  //         <button className='burger-icon' onClick={toggleMenuOpen}>
  //           <img src={require('./img-header/burguer.png')} alt='menuburguer' />
  //         </button>
  //         {menuVisible && (
  //           <div className="hamburguesa">
  //             <div className='hamburguesa-content'>
  //               <button className='close-burger' onClick={toggleMenuClose}>❌</button>
  //               <ul>
  //                 <li>
  //                   <Link to="Mujer" className="enlace-hamburguesa">
  //                     Mujer
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link to="Hombre" className="enlace-hamburguesa">
  //                     Hombre
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link to="Accesorios" className="enlace-hamburguesa">
  //                     Accesorios
  //                   </Link>
  //                 </li>
  //                 <li>
  //                   <Link to="AllProducts" className="enlace-hamburguesa">
  //                     Todos los productos
  //                   </Link>
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //       {/* LOGO */}
  //       <div className="logo">
  //         <a href="/">
  //           <img src={require('./img-header/logo.png')} alt='logo' />
  //         </a>
  //       </div>
  //       {/* BUSCADOR */}
  //       <div className="right-align-elements">
  //         <form onSubmit={onSearchSubmit}>
  //           <div className="search-bar">
  //             <img src={require('./img-header/search.png')} alt='buscador' />
  //             <input
  //               type='text'
  //               name='valueSearch'
  //               className='searchInput'
  //               value={valueSearch}
  //               onChange={onImputChange}
  //               placeholder='Search...' />
  //           </div>
  //         </form>
  //         {/* REGISTRO */}
  //         <div>
  //           <button className="registro-icon" onClick={handleOpenModal}><img src={require('./img-header/registro.png')} alt='registro' /></button>
  //           {isOpen && (
  //             <div className="registro">
  //               <div className="registro-content">
  //                 <div className='registration'>
  //                   <h2 className='registration'>Registration</h2>
  //                   <button className='registration-x' onClick={handleCloseModal}>❌</button>
  //                 </div>
  //                 <form onSubmit={handleSubmit} className="registros">
  //                   <label>
  //                     Username:
  //                     <input type="text" value={username} onChange={handleUsernameChange} />
  //                   </label>
  //                   <label>
  //                     Password:
  //                     <input type="password" value={password} onChange={handlePasswordChange} />
  //                   </label>
  //                 </form>
  //                 <button className="register" type="submit">Register</button>
  //               </div>
  //             </div>
  //           )}
  //         </div>
  //         {/* CARRITO */}
  //         <div className="car">
  //           <Link className="carrito" to={"/Carrito"}><img src={require('./img-header/carrito.png')} alt='carrito' />
  //             {cart.length > 0 ? <CarritoContador /> : null}
  //           </Link>
  //         </div>
  //         {/* CARRITO */} 
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="menu">
      <div className="header">
        <div className="burger-menu">
          <button className='burger-icon' onClick={toggleMenuOpen}>
            <img src={require('./img-header/burguer.png')} alt='menuburguer' />
          </button>
          {menuVisible && (
            <div className="hamburguesa">
              <div className='hamburguesa-content'>
                <button className='close-burger' onClick={toggleMenuClose}>❌</button>
                <ul>
                  <li>
                    <Link to="Mujer" className="enlace-hamburguesa">
                      Mujer
                    </Link>
                  </li>
                  <li>
                    <Link to="Hombre" className="enlace-hamburguesa">
                      Hombre
                    </Link>
                  </li>
                  <li>
                    <Link to="Accesorios" className="enlace-hamburguesa">
                      Accesorios
                    </Link>
                  </li>
                  <li>
                    <Link to="AllProducts" className="enlace-hamburguesa">
                      Todos los productos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="logo">
          <a href="/">
            <img src={require('./img-header/logo.png')} alt='logo' />
          </a>
        </div>
        <div className="right-align-elements">
          <form onSubmit={onSearchSubmit}>
            <div className="search-bar">
              <img src={require('./img-header/search.png')} alt='buscador' />
              <input
                type='text'
                name='valueSearch'
                className='searchInput'
                value={valueSearch}
                onChange={onImputChange}
                placeholder='Search...'
              />
            </div>
          </form>
          <div>
            <button className="registro-icon" onClick={handleOpenModal}>
              <img src={require('./img-header/registro.png')} alt='registro' />
            </button>
            {isOpen && (
              <div className="registro">
                <div className="registro-content">
                  <div className='registration'>
                    <h2 className='registration'>Registration</h2>
                    <button className='registration-x' onClick={handleCloseModal}>❌</button>
                  </div>
                  <form onSubmit={handleSubmit} className="registros">
                    <label>
                      Username:
                      <input type="text" value={username} onChange={handleUsernameChange} />
                    </label>
                    <label>
                      Password:
                      <input type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    <button className="register" type="submit">Register</button>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div className="car">
            <Link className="carrito" to={"/Carrito"}>
              <img src={require('./img-header/carrito.png')} alt='carrito' />
              {cart.length > 0 ? <CarritoContador /> : null}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

}
export { Menu };

