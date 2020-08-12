import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp/>', () => {
  test('Debe mostrar el mensaje: Hola, soy Goku y estás leyendo esto con mi voz!', () => {
    const saludo = 'Hola, soy Goku y estás leyendo esto con mi voz!';
    const otraPropiedad = 666;
    const { getByText } = render(<PrimeraApp saludo={saludo} otraPropiedad={otraPropiedad}/>);

    expect(getByText(saludo)).toBeInTheDocument();
  });
  
});
