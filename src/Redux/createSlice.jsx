import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    users:[],
    loading:false,
    error:null
}

const userDetailsSlice = createSlice({
    name:'userDetails',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createUser.pending, (state)=>{
            state.loading = true
        })

        builder.addCase(createUser.fulfilled, (state, action)=>{
            state.loading = false
            state.users.push(action.payload)
        })

        builder.addCase(createUser.rejected, (state, action)=>{
            state.loading = false
            state.users = action.payload
        })
    }
})


export const createUser = createAsyncThunk("createuser", async(data, {rejectWithValue})=>{
    const response = await fetch("https://66aa0b4b613eced4eba75553.mockapi.io/crud", {
        method: "post",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data)
    })

    try {
        const result = await response.json()
        return result;
    } catch (error) {
       return rejectWithValue(error)   
    }
})


export default userDetailsSlice.reducer