import React, { useState, useMemo } from 'react'
import "../02-useEffect/effects.css"
import {useCounter} from "../../Hooks/useCounter"

export const MemoHook = () => {
    const {counter, increment} = useCounter(5000);
    const [show, setShow] = useState(true);

    const procesoPesado = (iteraciones) =>{
        for (let index = 0; index < iteraciones; index++) {
            console.log("asd");            
        }
        return `${iteraciones} iteraciones`
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);


    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr/>

            <p>{memoProcesoPesado}</p>

            <button
                className="btn btn-primary"
                onClick={increment}
            
            >
                +1

            </button>
            <button 
                onClick = {()=>{
                    setShow(!show)
                }}
                className="btn btn-outline-primary ml-3"
            >
                Show/Hide {JSON.stringify(show)}

            </button>
            
        </div>
    )
}
