import React, { useState } from 'react'
import "../02-useEffect/effects.css"
import {useCounter} from "../../Hooks/useCounter"
import { Small } from './Small';

export const Memorize = () => {
    const {counter, increment} = useCounter(10);

    const [show, setShow] = useState(true);
    return (
        <div>
            <h1>Counter:<Small value = {counter}/> </h1>
            <hr/>
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
