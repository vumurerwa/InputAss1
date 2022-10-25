import React from "react";
const TextInput = (props) => {
    return(
        <div>
         <input name={props.name} onChange={props.handleChange} placeholder={props.placeholder}/>
        </div>
    )
}
export default TextInput