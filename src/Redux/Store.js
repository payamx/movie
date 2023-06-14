import {configureStore, createSlice} from "@reduxjs/toolkit";

export const storeSlice=createSlice({
    name:'form',
    initialState:{username:"",
                password:"",
    },
    reducers:{
        getName:(state, action)=>{state.username=action.payload.username},
        getPassword:(state, action)=>{state.password=action.payload.password},

   }

})
export const {getName,getPassword,clearName}=storeSlice.actions
export const store=configureStore({reducer: storeSlice.reducer})