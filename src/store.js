import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { StaffReducer } from './redux/reducers/StaffReducers'

const reducerAdd = {
    StaffReducer: StaffReducer
}

export default configureStore({
    reducer: reducerAdd,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});