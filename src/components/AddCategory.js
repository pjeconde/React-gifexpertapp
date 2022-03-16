import React, { useState } from "react"
import propTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => { 
    
    const [inputValue , setInputValue] = useState("...");

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.length >= 1)
        {
            setCategories( cats => [ inputValue, ...cats ]);
        }
        //console.log(inputValue);
        //console.log(setCategories); 
        setInputValue("");
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" value={ inputValue } onChange={ handleInputChange } ></input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}
