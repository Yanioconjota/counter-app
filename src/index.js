import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css'

const divRoot = document.querySelector('#app');

ReactDOM.render(
  <>
    <h1>
      <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
        😲 🤖 👾
      </span>
    </h1>
    <PrimeraApp saludo="Hola, soy Goku y estás leyendo esto con mi voz!" otraPropiedad={666} />
    <hr/>
    <h3>Acá empieza lo bueno... </h3>
    <p>Manejo de Hooks y eventos </p>
    <hr/>
    <CounterApp value={0} />
  </>, divRoot)
;

// ReactDOM.render(<PrimeraApp saludo="Hola, soy Goku y estás leyendo esto con mi voz!" otraPropiedad={666} />, divRoot);