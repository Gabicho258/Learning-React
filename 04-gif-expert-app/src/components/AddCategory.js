import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {
    const [inputValue, setimputValue] = useState("")
    const handleInputChange = (e) =>{
        // console.log(e.target.value);
        setimputValue(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length >2) {
            setCategories(cats => [inputValue ,...cats ])
            setimputValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange}
            />

        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,

}
