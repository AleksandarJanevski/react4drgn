import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Users } from './components/users';
import { Provider } from 'react-redux';
import store from './store';
import { Login } from './components/auth/Login';
import {PrivateRoute} from './utils/PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route index path="/login" element={<Login/>}/>
                <Route element={<PrivateRoute/>}>
                <Route path="/" element={<App />}>
                    <Route path="/users" element={<Users />} />
                </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)