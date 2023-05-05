import React, {useContext} from "react";
import CComponenet from "./c.component";
import { UserContext } from "../../context/user";

const BComponenet = () => {
    const [userName, setUserName] = useContext(UserContext);

    return <>
        <CComponenet /> B-Component - {userName}
        <button onClick={() => setUserName("Will Smith")}> Update User </button>
    </>
}

export default BComponenet;