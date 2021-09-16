import React, { useState } from 'react'
import "../02-useEffect/effects.css"
import {MultipleCustomHooks} from "../03-examples/MultipleCustomHooks"
export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        
        <>
    
            <h1>RealExampleRef</h1>
            {show && <MultipleCustomHooks />}
            <button
                className="btn btn-primary mt-5"
                onClick= {()=>{
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>



        </>
    
    )
}
