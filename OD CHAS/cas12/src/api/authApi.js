import { api } from "../config/properties";

export const logInUser = (email, password) => {
    const header = {
        'Content-Type': 'application/json'
    }
    const data = { email: email, password: password }

    return fetch(`${api.localRoute}/login`, { method: 'POST', headers: header, body: JSON.stringify(data) })
        .then(res => res.json())
        .then(json => Promise.resolve(json))
        .catch(err => Promise.reject(err))
}