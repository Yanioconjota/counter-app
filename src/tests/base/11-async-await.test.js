import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async await', () => {
  test('Debe retornar una imagen async', async() => {
    const url = await getImagen()
    .then(url => {
      console.log(url);
      expect(url.includes('https://')).toBe(true);
      //Para forzar el error y ver que arroja el test es necesario cambiar la API KEY en 11-async-await.js
    });
  });
  
});
