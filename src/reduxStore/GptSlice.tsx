import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:"gpt",
    initialState:{
        isGptEnabled:false,
    }, 
    reducers:{
        toggleGpt:(state) =>{
            state.isGptEnabled = !state.isGptEnabled;
        },
    }
}); 
export const { toggleGpt } = GptSlice.actions;
export default GptSlice.reducer;