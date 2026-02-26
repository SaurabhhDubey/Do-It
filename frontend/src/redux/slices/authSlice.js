import { createSlice } from "@reduxjs/toolkit";

const savedAuth =localStorage.getItem("auth");

const initialState= savedAuth?JSON.parse(savedAuth)
:{
    user:null,
    token:null, 
    isLoggedIn :false,
};

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers:{
        loginSuccess:(state ,action)=>{
          state.user=action.payload.user;
          state.token =action.payload.token;
          state.isLoggedIn=true;
          localStorage.setItem("auth" ,JSON.stringify(state)); // after refresh still login
        },
        logout: (state)=>{
            state.user = null;
            state.token=null;
            state.isLoggedIn =false;
            localStorage.removeItem("auth"); // logout
        },
    }
});

export const {loginSuccess , logout}= authSlice.actions;
export default authSlice.reducer;