import { useFetchGifs } from "../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks'



describe('Pruebas en custom hook useFetchGifs', () => {


    test('Debe retornar el estado inicial', async() => {
        const {result, waitForNextUpdate } = renderHook(()=> useFetchGifs('Dragon Ball'))
        const {data, loading} = result.current;
        // const {data, loading} = useFetchGifs('Dragon Ball');
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    test('Debe retornar un arreglo de imgs y loading false', async() => {
        const {result, waitForNextUpdate } = renderHook(()=> useFetchGifs('Dragon Ball'))
        await waitForNextUpdate();
        
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
        
    })
    
    
})
