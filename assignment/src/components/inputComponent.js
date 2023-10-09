import React from 'react';

const CustomInput = ({lable, onChange}) => {
    return(
        <div style={{display:'flex', flexDirection:'column'}}> 
            <label>{lable}</label>
            <input style={{width:200}} onChange={onChange}/>
        </div>
    )
}

export default CustomInput;