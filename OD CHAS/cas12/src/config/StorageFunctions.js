export const setUserStorage = (token,user) => { //login na user
    localStorage.setItem("token",token);
    localStorage.setItem("user",user);
}

export const removeUserStorage = () =>{ //logout
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
}

export const getToken = () => {
    return localStorage.getItem("token");
}

// export const getUser = () => {
//     const user = localStorage.getItem("user");
//     if(user !=="undefined") return JSON.parse(user)
//     else return '';
// }