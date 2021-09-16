
import React from 'react';
import {shallow} from 'enzyme'
import GifExpertApp from '../GifExpertApp';



describe('Pruebas en GifExpertApp', () => {

    test('Debe hacer match con el snapshot', () => {
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot();


    })
    
})
