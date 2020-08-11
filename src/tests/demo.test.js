describe('Pruebas en archivos demo.test.js', ()=> {
  test('Los strings deben ser iguales', () => {
    // 1 Inicialización
    const mensaje = 'Hola Mundo';
    // 2 estimulo
    const mensaje2 = `Hola Mundo`;

    //3 Observar comportamiento
    expect(mensaje).toBe(mensaje2);
  });
  test('debe ser true ', () => {
    const isActive = true;
    if (!isActive) {
      throw new Error('No está activo!');
    }
  })
});

