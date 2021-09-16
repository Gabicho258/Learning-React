import { getImagen } from "../../base/11-async-await"

describe('Prueba con async await', () => {
    test('should return url with image', async() => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true)
    })
    
})
