import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../Hooks/useFetch';
import './layout.css'
import {useCounter} from '../../Hooks/useCounter';
export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    // console.log(state);
    const {quote} = !!data && data[0];
    const [boxSize, setBoxSize] = useState({});
    const pTag = useRef();

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
        
    }, [quote])

    return (
        <>
            <h1>Layout Effect</h1>
            <hr/>

            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref = {pTag}
                >{quote}</p>
            </blockquote>
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>


            <button 
                className="btn btn-primary"
                onClick = {increment}
            >
                Siguiente Quote
            </button>

        
        </>
    )
}
