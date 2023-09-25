
import { createSlice } from "@reduxjs/toolkit";

//State defined

export const countSlice = createSlice ({
name: "count",
initialState: {
    value: 50,
},

reducers: {
    plus: (state) => {
        state.value += 20;
    },

    minus: (state) => {
        state.value -= 20;
    }

    
}
});

// Action Creators
export const {plus, minus} = countSlice.actions
//Export to store;
export default countSlice.reducer
