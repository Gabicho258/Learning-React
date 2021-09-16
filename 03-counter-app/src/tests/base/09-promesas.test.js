import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    test('Retorna heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then((heroe) =>{
                expect(heroe).toBe(heroes[0])
                done();
            })
    });
    test('Debe saltar error si heroe no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch((error) =>{
                // eslint-disable-next-line jest/no-conditional-expect
                expect(error).toBe("No se pudo encontrar el héroe");
                done();
        });

    
    });
    
    
})
