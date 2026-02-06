import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items : [],
    totalPrice : 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state , action){
        const exists =state.items.find(item=>item.id===action.payload.id);
        if (!exists){
            state.items.push(action.payload);
            state.totalPrice += action.payload.price;
        }
        },

        removeFromCart(state , action){
        const item= state.items.find(i=>  i.id===action.payload);
        if(item){
            state.totalPrice -=item.price;
            state.items = state.items.filter(i => i.id !== action.payload);
        }
        },

         clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    }
    
    
    
    
    
    
    }



});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
