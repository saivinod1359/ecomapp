import React from 'react';

const InputComponent = (props) => {
    const { fieldName, fieldId, label, fieldType, validate, onChangeEventHandler } = props;

    return <>
        <label htmlFor={fieldId}>{label}</label>
        <input
        type={fieldType}
        name={fieldName}
        id={fieldId}
        onBlur={ () => validate(fieldId) }
        onChange={(event) => onChangeEventHandler(fieldId, event.target.value)}/>
    </>
}

export default InputComponent;