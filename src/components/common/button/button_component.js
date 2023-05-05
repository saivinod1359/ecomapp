import React, { useState } from "react";

const ButtonComponent = () => {
    const [btnName, setBtnName] = useState("Click Me");

    const handleClick = (e) => {
        setBtnName("Update");
    }

    return <button data-testid="btn" onClick={handleClick}> {btnName} </button>
}

export default ButtonComponent;