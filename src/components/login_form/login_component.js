import React, { useState, useEffect } from 'react';
import Input from "../common/input";
import { login } from "../../configs/forms/login_form";
import "./login_component.css"

const LoginComponent = () => {
    const [errors, setErrors] = useState("");
    
    const onChangeEventHandler = (fieldId, value) => {
        // const a = null;
        console.log("Here")
        try {
            login.forEach((item) => {
                if (item.fieldId === fieldId) {
                    item.value = value;
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

    const validate = (fieldId) => {
        login.forEach((item) => {
            console.log('Value: ', item.value)
            if (item.fieldId === fieldId && item.value === "" && item.validations[0] === "required") {
                item.isValid = false;
                setErrors(`${item.label} is required to proced`)
            } else {
                item.isValid = true;
            }
        })
    }

    return <>
        {
            login.map((field, index) => {
                const { fieldType, fieldName, fieldId, label, validations, events } = field;

                return <div className="block">
                    <Input
                        fieldType={fieldType}
                        fieldName={fieldName}
                        label={label}
                        fieldId={fieldId}
                        validations={validations}
                        validate={validate}
                        onChangeEventHandler={onChangeEventHandler}
                    />
                </div>
            })
        }
        {/* {errors && errors.length  && errors.((err) => <p>{err}</p>)} */}
        {errors && errors.length && <p>{errors}</p>}

    </>
}

export default LoginComponent;