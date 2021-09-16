import {getGifs} from '../helpers/getGifs'

describe('Pruebas con getGifs fetch', () => {
    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs("GTA V");
        expect(gifs.length).toBe(10);
    })
    test('Debe traer 0 elementos si no se pone category', async () => {
        const gifs = await getGifs("");
        expect(gifs.length).toBe(0);
    })
    
})
