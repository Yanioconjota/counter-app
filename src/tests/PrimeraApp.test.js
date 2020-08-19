import React from 'react';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';

describe('Pruebas en <PrimeraApp/>', () => {
  // test('Debe mostrar el mensaje: Hola, soy Goku y estás leyendo esto con mi voz!', () => {
  //   const saludo = 'Hola, soy Goku y estás leyendo esto con mi voz!';
  //   const otraPropiedad = 666;
  //   const { getByText } = render(<PrimeraApp saludo={saludo} otraPropiedad={otraPropiedad}/>);

  //   expect(getByText(saludo)).toBeInTheDocument();
  // });
  test('Debe mostrar <PrimeraApp/> Correctamente', () => {
    const saludo = 'Hola, soy Goku y estás leyendo esto con mi voz!';
    const otraPropiedad = 666;
    const wrapper = shallow(<PrimeraApp saludo={saludo} otraPropiedad={otraPropiedad}/>);
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe mostrar el subtítulo enviado por props ', () => {
    const saludo = 'Hola, soy Goku y estás leyendo esto con mi voz!';
    const otraPropiedad = 666;
    const subTitulo = 'Soy un subtítulo!';

    const wrapper = shallow(<PrimeraApp
      saludo={saludo}
      otraPropiedad={otraPropiedad}
      subtitulo={subTitulo}
    />);

    const textoParrafo = wrapper.find('#defaultProps').text();
    console.log(textoParrafo);
    console.log(subTitulo);
    expect(textoParrafo).toBe(`defaultProps: ${subTitulo}`);
  })
  
});
