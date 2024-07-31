import { configureStore } from "@reduxjs/toolkit";
import crudReducer from '../Redux/createSlice'

export const store = configureStore({
    reducer:{
        crud:crudReducer
    }

})