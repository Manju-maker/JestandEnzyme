export const setUserInfo=userData=>{
    return {
        type:"USERINFO",
        payload:userData
    };
}

export const logoutUser=userData=>{
    return {
        type:"LOGOUT",
    };
}