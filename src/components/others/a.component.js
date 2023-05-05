import React, { useContext } from "react";
import BComponenet from "./b.component";
import { UserContext } from "../../context/user";
import { EmployeeContext } from "../../context/employee";

const AComponenet = () => {
    const employee = useContext(EmployeeContext);
    
    return (
        // <UserContext.Provider value={"Vinod"}>
            <><BComponenet />
            <p>Employee:  {employee}</p></>
        // </UserContext.Provider>
    )
}

export default AComponenet;