
import React from 'react';
import {shallow} from 'enzyme';
import "@testing-library/jest-dom"
import {AddCategory} from '../components/AddCategory'

describe('Pruebas en AddCategory', () => {
    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    })
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find("input");
        const value = "Hola Mundo"
        input.simulate("change",{target: {value}});

    })
    test('No debe de postear la informacion onSubmit', () => {
        
        wrapper.find("form").simulate("submit",{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = "Hola Mundo"
        const input = wrapper.find("input");
        input.simulate("change",{target: {value}});
        wrapper.find("form").simulate("submit",{preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(input.prop("value")).toBe("");
    })
    
    
        
})
