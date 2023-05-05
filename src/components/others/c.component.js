import React, { useContext } from "react";
import { UserContext } from "../../context/user";

const CComponenet = () => {
    const [userName] = useContext(UserContext);

    return <>
        <h2> C Component {userName}</h2>
    </>
}

export default CComponenet;