import { api } from './../config/properties';

export const getUsers = () => {
    return fetch(`${api.root}/users`)
        .then(res => res.json())
        .then(json => Promise.resolve(json)) //lista od 10 useri
        .catch(err => Promise.reject(err))
} 

export const removeUser = (userId) => {
    //https://jsonplaceholder.typicode.com/users/1
    return fetch(`${api.root}/users/${userId}`,{method:'DELETE'})
            .then(res=>res.json())
            .then(json=>Promise.resolve(userId)) //json = {}
            .catch(err=>Promise.reject(err))
}