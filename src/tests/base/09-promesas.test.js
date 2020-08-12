import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
  test('Debe retornar un héroes async', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then( heroe =>{
        console.log(heroe);
        expect(heroe).toBe(heroes[0]);
        done();
      });
  });
  test('Debe retornar un error si el id del héroes no existe', (done) => {
    const id = 10;
    getHeroeByIdAsync(id)
      .catch( error => {
        expect(error).toBe('No se pudo encontrar el héroe');
        done();
      });
  });
  
})
