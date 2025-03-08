import {configureStore} from "@reduxjs/toolkit";
import authSlice from './login'
import counterSlice from './counter'
const store=configureStore({
    reducer:{
        counter:counterSlice.reducer,
        auth:authSlice.reducer,
    }
})


export default store
