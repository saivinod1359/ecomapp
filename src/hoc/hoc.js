import React from "react";

const HOC = (props) => {
    console.log(props.children[0])
    return <div className="hocClass" style={{ display: 'flex' }}>
        {props.children}
    </div>

}

export default HOC;