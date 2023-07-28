import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    noOfCake: 10,
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        buyCake: (state) => {
            state.noOfCake -= 1;
        },
        addCake: (state, action) => {
            state.noOfCake += action.payload;
        }
    },
});

export default  cakeSlice.reducer;
export const {buyCake, addCake} = cakeSlice.actions;

