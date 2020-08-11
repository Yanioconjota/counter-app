import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', ()=> {
  test('getSaludo debe retornar Hola Goku!', () => {
    const nombre = 'Goku';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe(`Hola ${nombre}!`);
    console.log(saludo);
  })
  test('getSaludo debe retornar Hola Vegeta! si no hay argumento nombre', () => {
    const saludo = getSaludo();
    expect(saludo).toBe(`Hola Vegeta!`);
  })
  
  
});