
import React from 'react';
import './Testimony.css';

function Testimony({image, name, country, charge, company, testimony}) {
  return (
    <div className='Testimony-Container'>
      <img 
        className='imagen-testimonio'
        src={require(`../../public/images/${image}.jpg`)}
        alt='Foto de Emma'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{name}</strong> en {country}
        </p>
        <p className='cargo-testimonio'>
          {charge} en <strong>{company}</strong>
        </p>
        <p className='texto-testimonio'>"{testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;
