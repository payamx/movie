import {configureStore, createSlice} from "@reduxjs/toolkit";

export const storeSlice=createSlice({
    name:'form',
    initialState:{username:"",
                password:"",
    },
    reducers:{
        name:(state, action)=>{state.name=action.payload.name},
        password:(state, action)=>{state.password=action.payload.password},
        clearName:(state)=>{state.name=""},

   }

})
export const {name,password,clearName}=storeSlice.actions
const store=configureStore({reducer: {form :storeSlice.reducer}})