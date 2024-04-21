import React from "react";
import { Navigate } from "react-router-dom";


function Protected({isSigned,children}){
    console.log("is signed in = "+isSigned);
    if(isSigned){
        return <Navigate to={"/"} replace/>
    }
    return children
}
export default Protected;
