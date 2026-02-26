import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    exists : false,
    isApproved: false,
    businessName: "",
    experienceYears: null,
    serviceOffered: [],
    address: null,
};

const vendorSlice = createSlice({
    name : "vendor",
    initialState,
    reducers:{
        setVendorStatus:(state ,action)=>{
            state.exists=action.payload.exists;
            state.isApproved=action.payload.isApproved;
            state.businessName=action.payload.businessName;
            state.experienceYears = action.payload.experienceYears;
            state.serviceOffered = action.payload.serviceOffered;
            state.address = action.payload.address;
        },

        clearVendor: (state) => {
      state.exists = false;
      state.isApproved = false;
      state.businessName = null;
      state.experienceYears = null;
      state.serviceOffered = [];
      state.address = null;
    },
    },
});

export const {setVendorStatus , clearVendor} = vendorSlice.actions;
export default vendorSlice.reducer;