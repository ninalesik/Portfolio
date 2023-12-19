import React from "react";

export const Input =({name, value, error, label, onChange})=>{
const handleChange =(event) =>{

    const {name,value} = event.currentTarget;
    onChange({name, value})
};  
return (
        <div>
<label>{label}</label>
            <input type="text" 
            name={name} 
            value={value}  
            onChange={handleChange} 
            className={error ? "errorInput" : ""}/>
        </div>
    )
}