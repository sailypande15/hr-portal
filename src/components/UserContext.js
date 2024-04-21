import React from "react";

const userContext = React.createContext({
    userName:'',
    userPassword:'',
    role:''
});

export default userContext;