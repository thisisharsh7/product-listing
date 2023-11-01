import { createSlice } from "@reduxjs/toolkit";
import sdata from '../../service/data.json'

export const product = createSlice({
    name: 'product',
    initialState: {
        rdata: sdata,
        data: sdata,
        cPage: 0,
        tPage: Math.floor((sdata.length) / 8),
    },
    reducers: {
        SETDATA: (state, action) => {
            return { ...state, data: action.payload, tPage: Math.floor((action.payload.length) / 8), cPage: 0 };
        },
        SETPAGE: (state, action) => {
            return { ...state, cPage: action.payload }
        },
    }
})
export const { SETPAGE, SETDATA } = product.actions;
export default product.reducer;