import React, { useState } from "react";

const Label = () => {
    const [name, setName] = useState("Sai")
    const handleClick = () => {
        // console.log("Hello 1");
        setName("Smith")
    }

    return <>
        <label data-testid="labelid" onClick={handleClick}> {name} </label>
    </>
}

export default Label;