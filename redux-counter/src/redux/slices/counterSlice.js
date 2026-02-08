import { createSlice } from "@reduxjs/toolkit"

export const conterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment : (state)=>{
            state.value+=1
        },
        decrement : (state)=>{
            state.value-=1
        },
        increment5 : (state)=>{
            state.value+=5
        },
        decrement10 : (state)=>{
            state.value-=10
        }
    }
})

export const {increment,decrement,increment5,decrement10} = conterSlice.actions;
export default conterSlice.reducer