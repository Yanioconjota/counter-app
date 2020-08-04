import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css'

const divRoot = document.querySelector('#app');

ReactDOM.render(<PrimeraApp saludo="Hola, soy Goku y estás leyendo esto con mi voz!" />, divRoot);