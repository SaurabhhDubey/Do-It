import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";
import vendorReducer from "./slices/vendorSlice";

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        auth:authReducer,
        vendor:vendorReducer,
    },
});