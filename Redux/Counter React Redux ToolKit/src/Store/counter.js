import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterVal : 0},
    reducers: {
        increment(state) {
            state.counterVal++;
        },
        decrement(state) {
            state.counterVal--;  
        },
        addition(state,action) {
            state.counterVal += (action.payload?.number || 0);
        },
        substraction(state,action) {
            state.counterVal -= (action.payload?.number || 0);
        }    
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice;