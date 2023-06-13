import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { Header } from './Componentes/Pagina-principal/Header';
import Carrito from './Componentes/Pagina-principal/Carrito';
import { SearchPage, HomePage, Descripcion, AllProducts, Hombre, Mujer, Accesorios, } from './Pages';
import Administrador from './Pages/Admin/Administrador';
import CompEditProduct from './Componentes/Administrador/EditProduct';
import CompCreateProduct from './Componentes/Administrador/CreateProduct';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="Descripcion/:id" element={<Descripcion />} />
        <Route path="Busqueda" element={<SearchPage />} />
        <Route path="Carrito" element={<Carrito />} />
        <Route path="AllProducts" element={<AllProducts />} />
        <Route path="Mujer" element={<Mujer />} />
        <Route path="Hombre" element={<Hombre />} />
        <Route path="Accesorios" element={<Accesorios />} />
        <Route path="Admin" element={<Administrador />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path='/edit/:id' element={<CompEditProduct/>} />
        <Route path='/create' element={<CompCreateProduct/>} />
      </Route>
    </Routes>
  );
};


