

import React from 'react';
import {shallow} from 'enzyme'
import { GifGrid } from '../components/GifGrid';
import { useFetchGifs } from '../hooks/useFetchGifs';
jest.mock("../hooks/useFetchGifs")

describe('Pruebas en GifGrid', () => {

    // test('debe hacer match con el snapshot', () => {
    //     const wrapper = shallow(<GifGrid category = "gtav"/>)
    //     expect(wrapper).toMatchSnapshot();
    // })
    test('debe mostrar items cuando se cargan imagenes useFetc', () => {
        const gifs = [{
            id : "ABC",
            url : "http://www.w3.org/1999/",
            title : "titulo"
        },
        {
            id : "123",
            url : "http://www.w3.org/1999/",
            title : "titulo"
        }]
        useFetchGifs.mockReturnValue({
            data : gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category = "gtav"/>)


        // expect(wrapper.find("p").exists).toBe(false)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
    })
    
})
