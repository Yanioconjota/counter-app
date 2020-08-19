import React from 'react';
import PropTypes from 'prop-types';

const string = 'Esto es un string';
const numeros = 666;
const booleano = true;
const arr = ['🍲', '🍔', '🍟', '🍕', '🌭', '🥪'];
const obj = {
  nombre: 'James',
  apellido: 'Howlett',
  alias: 'Wolverine',
  edad: 'desconocida'
}
// const PrimeraApp = ({saludo}) es la desestructuración de las props
//const PrimeraApp = (props)
const PrimeraApp = ({
  saludo = 'Hola Insecto, esto es una prop default',
  otraPropiedad,
  subtitulo }) => {

  console.log({saludo});

  return (
    <>
      <h1>{saludo}</h1>
      <p>Otra propType tipo number: {otraPropiedad}</p>
      <p id="defaultProps">defaultProps: {subtitulo}</p>
      <p>Imprimir string: {string}</p>
      <p>Imprimir numeros: {numeros}</p>
      <p>Imprimir booleano: {booleano} no aparecen! 🙃</p>
      <p>Imprimir arrays: {arr}</p>
      <pre>{JSON.stringify( obj, null, 4)}</pre>
      <p>Párrafo común</p>
    </>
  )
    
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  otraPropiedad: PropTypes.number.isRequired
}

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtítulo!'
}

export default  PrimeraApp;

/*
import React, { Fragment } from 'react';
<Fragment>
  <h1>Hola Mundo</h1>
  <p>Párrafo</p>
</Fragment>
*/