import React from 'react';
import PropTypes from 'prop-types';

export const UsersComponent = ({usersList,errorMessage,deleteUser}) => {

    return(
        <div id="users-component">
            {usersList.length > 0 ? 
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.map(user=>{
                        return(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td><button onClick={()=>{deleteUser(user.id)}}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
             : <h3>Loading Users...</h3>}
        </div>
    )
}

UsersComponent.propTypes = {
    usersList:PropTypes.arrayOf(PropTypes.object).isRequired,
    errorMessage: PropTypes.string,
    deleteUser: PropTypes.func
}
