// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import React from 'react'
import "@testing-library/jest-dom"
import {shallow} from "enzyme"


describe('Pruebas en PrimeraApp', () => {
    // test('Debe mostrar el mensaje "Hola soy yo"', () => {
    //     const saludo = "Hola soy yo";
    //     const {getByText} = render(<PrimeraApp saludo = {saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })
    test('Debe mostrar primera app correctamente', () => {
        const saludo = "Hola soy yo"
        const wrapper = shallow(<PrimeraApp saludo = {saludo}/>)
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe mostrar el subtitulo enviado por promps', () => {
        const saludo = "Hola soy yo"
        const subtitulo = "Soy un subtituloasd"
        const wrapper = shallow(
            <PrimeraApp 
                saludo = {saludo}
                subtitulo = {subtitulo}
            />
        )
        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);
        expect(textoParrafo).toBe(subtitulo);
    })
    
    
})
