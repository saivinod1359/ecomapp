import React from 'react';

const InputComponent = (props) => {
    const { fieldName, fieldId, label, fieldType, validate, onChangeEventHandler } = props;

    return <div style={{display:"flex", flexDirection: "column"}}>
        <label htmlFor={fieldId}>{label}</label>
        <input
        type={fieldType}
        name={fieldName}
        id={fieldId}
        onBlur={ () => validate(fieldId) }
        onChange={(event) => onChangeEventHandler(fieldId, event.target.value)}/>
    </div>
}

export default InputComponent;