import {createSlice} from '@reduxjs/toolkit'; 

const UserSlice= createSlice({
    name:'user',
    initialState:null,
    reducers:{
        setAddUser:(state,action) =>{
            return action.payload; 
        },
        removeUser:(state,action) =>{
            return null; 
        }
    }
});

export const { setAddUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;