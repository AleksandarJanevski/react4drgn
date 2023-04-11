import React,{useEffect} from 'react';
import {UsersComponent} from './UsersComponent';
import {useDispatch,useSelector} from 'react-redux';
import operations from './duck/operations';

export default function UsersContainer(){

    const dispatch = useDispatch();
    const users = useSelector(state=>state.usersReducer.users); //[]
    const errorMessage = useSelector(state=>state.usersReducer.errorMessage); //undefined

    useEffect(()=>{
        dispatch(operations.fetchUsers());
    },[dispatch])

    function deleteUser(id){
       dispatch(operations.deleteUserFromJsonPlaceholder(id))
    }

    return(
        <div id="users-container">
            <UsersComponent usersList={users} errorMessage={errorMessage} deleteUser={deleteUser}/>
        </div>
    )
}