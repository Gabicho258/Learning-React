import { getSaludo } from "../../base/02-template-string"

describe('Pruebas en 02-template string', () => {
    test('Prueba en metodo getSaludo', () => {
        const nombre = "Gabriel";
        const saludo = getSaludo(nombre);
        expect(saludo).toBe("Hola "+nombre);
    })
    test('Retorna Hola Fernando por default', ()  => {
        const saludo2 = getSaludo();
        expect(saludo2).toBe("Hola Fernando");
    })  
})
