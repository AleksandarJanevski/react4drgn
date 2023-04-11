import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger'; // fiskalen aparat
import SayHelloReducer from './reducers/SayHelloReducer'; //vraboteniot t.e. prodavacot

const reducer = {
    SayHelloReducer:SayHelloReducer // gi nabroime vrabotenite t.e. reducers
}

export default configureStore({
    reducer:reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})