import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Prubeas en 05 funciones', () => {
    test('Debe retonar un objeto', () => {
        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const userTest = getUser();
        expect(user).toEqual(userTest);
    })
    test('Debe retornar un objeto 2', () => {
        const name = "Gabo";
        const user = {
            uid: 'ABC567',
            username: name    
        }
        const userTest = getUsuarioActivo(name);
        expect(user).toEqual(userTest);
    })
    
})
