import React from 'react'
import {useCounter} from '../../Hooks/useCounter'
import './counter.css'

export const CounterWithCustonHook = () => {

    const {state, increment, decrement, reset} = useCounter();



    return (
        <>
         <h1>CounterWithCustonHook : {state}</h1>
         <hr/>
         <button onClick = {()=> increment(2)} className="btn">+1</button>   
         <button onClick = {()=> decrement(2)} className="btn">-1</button>   
         <button onClick = {reset} className="btn">Reset</button>   
        </>
    )
}
