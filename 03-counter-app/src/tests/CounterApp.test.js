import React from 'react'
import "@testing-library/jest-dom"
import {shallow} from "enzyme"
import CounterApp from "../CounterApp";

describe('Tarea', () => {
    let wrapper = shallow(<CounterApp/>); 
    beforeEach(() => {
        wrapper = shallow(<CounterApp/>)
        
    })
    test('Debe mostrar correctamente counter app', () => {
        // const valueDefault = 10;
        const wrapper = shallow(<CounterApp />)
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe mostrar el valor por defecto', () => {
        const valueDefault = 100;
        const wrapper = shallow(
            <CounterApp 
            value = {valueDefault}
            />
            )
            const text = parseInt(wrapper.find("h2").text());
            expect(text).toBe(valueDefault);
            
        })
    test('Debe incrementar con el boton +1', () => {
        wrapper.find("button").at(0).simulate('click'); 
        const counterText = wrapper.find("h2").text().trim();
        expect(counterText).toBe("1")
    })
    test('Debe decrementar con el boton -1', () => {
        wrapper.find("button").at(2).simulate('click'); 
        const counterText = wrapper.find("h2").text().trim();
        expect(counterText).toBe("-1")
    })
    test('Debe resetearse con el boton reset', () => {
        const valueDefault = 100;
        const wrapper = shallow(
            <CounterApp 
            value = {valueDefault}
            />
            )
        wrapper.find("button").at(0).simulate('click'); 
        wrapper.find("button").at(1).simulate('click'); 
        const counterText = wrapper.find("h2").text().trim();

        expect(counterText).toBe(`${valueDefault}`)
    })
    
    
})
