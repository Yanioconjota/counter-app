import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';
import '@testing-library/jest-dom';

describe('Pruebas en <CounterApp/>', () => {
  const value = 0;
  let wrapper = shallow(<CounterApp value={value}/>);
  beforeEach(()=>{
    wrapper = shallow(<CounterApp value={value}/>);
  });
  test('Debe mostrar <CounterApp/> Correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe mostrar el valor por defecto de 100', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value}/>);
    const counterValue = Number(wrapper.find('h2').text().trim());
    expect(counterValue).toBe(value);
  });
  test('Debe incrementar con el botón +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterValue = Number(wrapper.find('h2').text().trim());
    expect(counterValue).toBe(1);
  });
  test('Debe decrementar con el botón -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterValue = Number(wrapper.find('h2').text().trim());
    console.log(counterValue);
    expect(counterValue).toBe(-1);
  });
  test('Debe resetear el valor con el botón reset', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value}/>);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterValue = Number(wrapper.find('h2').text().trim());
    expect(counterValue).toBe(value);
  });
  
});
