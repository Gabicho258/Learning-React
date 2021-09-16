
describe('Pruebas en el archivo demo.test.js', ()=>{
    test('deben ser iguales los string', () => {
        const mensaje = "Hola mundo";
        const mensaje2 = `Hola mundo`;
        expect(mensaje).toBe(mensaje2);
    })
})
