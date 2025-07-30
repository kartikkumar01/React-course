import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        value : 0
    },
    reducers : {
        increaseCount : (state, action) => {
            state.value = state.value + 1
        },
        decreaseCount : (state, action) => {
            state.value = state.value - 1
        }
    }
})

export const counterReducer =  counterSlice.reducer
export const {increaseCount, decreaseCount} = counterSlice.actions