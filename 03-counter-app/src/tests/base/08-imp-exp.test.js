import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    test('Debe retornar un heroe/id', () => {
        const id= 1;
        const heroe = getHeroeById(id);
        console.log(heroe);
        const heroeData =  heroes.find( (h) => h.id === id );
        expect(heroe).toEqual(heroeData)
    })
    test('Debe retornar undefined si heroe no existe', () => {
        const id= 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined)
    })
    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner= "DC";
        const arrHeroe = getHeroesByOwner(owner);
        const heroeOwner = heroes.filter( (heroe) => heroe.owner === owner );
        
        expect(arrHeroe).toEqual(heroeOwner);
    })
    test('Debe retornar un arreglo con los heroes de Marvel', () => {
        const owner= "Marvel";
        const arrHeroe = getHeroesByOwner(owner)
        
        expect(arrHeroe.length).toBe(2)
    })
    
    
})
