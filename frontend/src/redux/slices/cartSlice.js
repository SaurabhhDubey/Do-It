import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = ()=>{
    try{
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) :{items:[],totalPrice:0};
    }
    catch{
        return{items: [], totalPrice: 0};
    }
};
const saveCartToStorage = (state)=>{
    localStorage.setItem("cart" , JSON.stringify(state));
};

const initialState =loadCartFromStorage();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state , action){
        const exists =state.items.find(item=>item.id===action.payload.id);
        if (!exists){
            state.items.push(action.payload);
            state.totalPrice += action.payload.price;
            saveCartToStorage(state);
        }
        },

        removeFromCart(state , action){
        const item= state.items.find(i=>  i.id===action.payload);
        if(item){
            state.totalPrice -=item.price;
            state.items = state.items.filter(i => i.id !== action.payload);
            saveCartToStorage(state);
        }
        },

         clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      saveCartToStorage(state);
    }
    
    
    
    
    
    
    }



});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
