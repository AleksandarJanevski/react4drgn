import React,{useState} from 'react';
import operations from './duck/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [loginData,setLoginData] = useState({email:"",password:""})
    const dispatch = useDispatch();
    const navigate =useNavigate(); 
    
    const login = async () => {
        try{
            await dispatch(operations.logInToApp(loginData.email,loginData.password))
            navigate("/users")
        }
        catch(err){
            console.error(err)
        }
    }

    return(
        <div id="login">
            <label>Email</label>
            <input
                type={"text"}
                placeholder={"Enter Email"}
                value={loginData.email}
                onChange={(e)=>{setLoginData({...loginData,email:e.target.value})}}
            />
            <br/>
            <br/>
            <label>Password</label>
            <input 
                type={"password"}
                placeholder={"Enter Password"}
                value={loginData.password}
                onChange={(e)=>{setLoginData({...loginData,password:e.target.value})}}
            />
            <br/>
            <br/>
            <br/>
            <button onClick={login}>Login</button>
        </div>
    )
}