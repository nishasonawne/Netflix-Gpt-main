import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice= createSlice({
    name:"lang", 
    initialState:{
        languageSelected:"",
    }, 
    reducers:{
        setLanguage:(state,action) =>
        {
           state.languageSelected = action.payload
        }
    }
}); 
export const { setLanguage }=LanguageSlice.actions; 
export default LanguageSlice.reducer;