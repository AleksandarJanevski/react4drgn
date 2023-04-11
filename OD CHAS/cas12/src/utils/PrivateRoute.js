import { getToken } from "../config/StorageFunctions";
import {Outlet,Navigate} from 'react-router-dom';

export const PrivateRoute = ({redirectPath="/login",children}) => {

    if(!getToken()){
        return <Navigate to={redirectPath}/>
    }
    else{
        return children ? children : <Outlet/>
    }
}