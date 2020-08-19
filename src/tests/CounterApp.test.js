import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';
import '@testing-library/jest-dom';

describe('Pruebas en <CounterApp/>', () => {
  test('Debe mostrar <CounterApp/> Correctamente', () => {
    const value = 0;
    const wrapper = shallow(<CounterApp value={value}/>);
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe mostrar el valor por defecto de 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value}/>);
    const counterValue = Number(wrapper.find('h2').text().trim());
    expect(counterValue).toBe(value);
  });
  
});
