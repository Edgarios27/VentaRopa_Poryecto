import React from 'react'
import './Pagina-principal.css'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'

export const Banner = () => {
  return (
    <div>
      <Images />
    </div>
  )
}

function Images() {
  return (
    <div className="banner">
      <div className="flip-card">
        <Link to="Hombre" class="enlace-hamburguesa">
          <div className="flip-card-inner">
            <div className="banner-card-front">
              <div className="img1">
              <MediaQuery maxWidth={1024}>
                <h1 className='catg-resp'>HOMBRES</h1>
              </MediaQuery>
              </div>
            </div>
            <div className="banner-card-back">
              <h1>HOMBRES</h1>
            </div>
          </div>
        </Link>
      </div>
      <div className="flip-card">
        <Link to="Mujer">
          <div className="flip-card-inner">
            <div className="banner-card-front">
              <div className="img2">
              <MediaQuery maxWidth={1024}>
                <h1 className='catg-resp'>MUJERES</h1>
              </MediaQuery>
              </div>
            </div>
            <div className="banner-card-back">
              <h1>MUJERES</h1>
            </div>
          </div>
        </Link>
      </div>
      <div className="flip-card">
        <Link to="Accesorios" class="enlace-hamburguesa">

          <div className="flip-card-inner">
            <div className="banner-card-front">
              <div className="img3">
              <MediaQuery maxWidth={1024}>
                <h1 className='catg-resp'>ACCESORIOS</h1>
              </MediaQuery>
              </div>
            </div>
            <div className="banner-card-back">
              <h1>ACCESORIOS</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
