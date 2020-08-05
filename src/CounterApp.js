import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Info eventos react: https://es.reactjs.org/docs/events.html

const CounterApp = ({value = 0}) => {

  let [counter, setCounter] = useState(value);

  console.log(counter);

  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter( (c) => c + 1 )
  };

  const handleSubstract = () => setCounter(counter - 1);

  const hanndleRest = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={hanndleRest}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp;

//<button onClick={handleAdd()}>+1</button>
//En este caso, como la función recibe un argumento y se lo pasa directamente al console.log, la función en el return se maneja sin el paréntesis ya que al momento de que react renderize el virtual dom va a entender que hay que ejecutarla antes de que se dispare el evento onClick. Para que esto funcione en la declaración de nuestra función handleAdd se debería retornar otra función en lugar de un console.log. Ej:
//const handleAdd = (e) => {return (e) => console.log(e)}
//Adicionalmente si del template se requiere recibir un argumento podemos hacerlo así
//<button onClick={ (e)=> handleAdd(e)}>+1</button>