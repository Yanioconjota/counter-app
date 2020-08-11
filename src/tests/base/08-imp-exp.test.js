import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas con funciones de héroes', () => {
  test('Debe retornar un héroe', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    console.log(heroe);

    const heroeData = heroes.find(h => h.id === id);

    expect(heroe).toEqual(heroeData);

  })
  test('Debe retornar undefined se héroe no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);
    console.log(heroe);

    expect(heroe).toBe(undefined);

  })
  test('Debe retornar un arreglo con los héroes de DC', () => {
    const owner = 'DC';
    const heroe = getHeroesByOwner(owner);
    console.log(heroe);

    const heroeData = heroes.filter(h => h.owner === owner);

    expect(heroe).toEqual(heroeData);

  })
  test('Debe retornar un arreglo con los héroes de Marvel', () => {
    const owner = 'Marvel';

    const heroeData = heroes.filter(h => h.owner === owner);
    console.log(`Héroes de Marvel: ${heroeData.length}`);
    console.log(heroeData);

    expect(heroeData.length).toBe(2);

  })
})



