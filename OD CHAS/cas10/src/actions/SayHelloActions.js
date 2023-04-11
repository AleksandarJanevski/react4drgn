export const sayHello = () => { //action creator
    return {
        type: "SAY_HELLO",                             
        payload: "Hi and welcome to my Redux App"         //action {type:"",payload:""}
    }
}

