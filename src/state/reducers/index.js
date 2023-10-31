import { createSlice } from "@reduxjs/toolkit";


export const product = createSlice({
    name: 'product',
    initialState: {
        searchQuery: "",
        searchBank: "",
        cPage: 0,
        tPage: 10,
    },
    reducers: {
        SETPAGE: (state, action) => {
            return { ...state, cPage: action.payload }
        }
    }
})
export const { SETPAGE } = product.actions;
export default product.reducer;