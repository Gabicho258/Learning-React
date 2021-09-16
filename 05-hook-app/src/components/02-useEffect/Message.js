import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {

        const mouseMove = () => {
            console.log(":D");
        }

        window.addEventListener("mousemove", mouseMove);
        console.log("Componente montado");
        
        return () => {

            window.removeEventListener("mousemove", mouseMove);
        }
    }, [])


    return (
        <>
            <h3>Message</h3>   
        </>
    )
}
