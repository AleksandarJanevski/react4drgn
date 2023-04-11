import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { sayHello } from '../actions/SayHelloActions';

export const HelloFunc = () => {

    const dispatch = useDispatch();
    const greeting = useSelector(state=>state.SayHelloReducer.greeting);

    useEffect(()=>{
       dispatch(sayHello()) 
    },[dispatch])
    return(
        <div id="hello-func">
            <h2>Hello Functional Component</h2>
            <p>{greeting}</p>
        </div>
    )
}