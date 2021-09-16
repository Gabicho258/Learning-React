import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {
    test('Debe retornar un string y un numero', () => {
        const arr = retornaArreglo();
        expect(arr).toEqual(["ABC", 123])        
    })
    
})
