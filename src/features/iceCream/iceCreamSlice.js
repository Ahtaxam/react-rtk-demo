import { createSlice } from "@reduxjs/toolkit";
import { buyCake } from "../cake/cakeSlice";
// const cakeActions = require('../cake/cakeSlice').cakeActions;

const initialState = {
    noOfIceCream: 20,
};

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        buyIceCream: (state) => {
            state.noOfIceCream -= 1;
        },
        addIceCream: (state, action) => {
            state.noOfIceCream += action.payload;
        }
    },
    // whenEver someone buy a cake we will provide free ice cream
    // we can achieve this by using extraReducers

    // extraReducers: {
    //     ['cake/buyCake']: (state) => {
    //         state.noOfIceCream -= 1;
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(buyCake, (state) => {
            state.noOfIceCream -= 1;
        });
    }

});

export default iceCreamSlice.reducer;
export const {buyIceCream, addIceCream} =  iceCreamSlice.actions;
