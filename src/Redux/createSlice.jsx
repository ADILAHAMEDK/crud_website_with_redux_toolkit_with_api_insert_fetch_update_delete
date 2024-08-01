import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    users:[],
    loading:false,
    error:null,
    searchData: []
}

const userDetailsSlice = createSlice({
    name:'userDetails',
    initialState:initialState,
    reducers:{
        searchUser:(state, action)=>{
            state.searchData = action.payload
        }
    },
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
            state.error = action.payload.message
        })



        builder.addCase(showUser.pending, (state)=>{
            state.loading = true
        })

        builder.addCase(showUser.fulfilled, (state, action)=>{
            state.loading = false
            state.users = action.payload
        })

        builder.addCase(showUser.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })


        builder.addCase(deleteUser.pending, (state)=>{
            state.loading = true
        })

        builder.addCase(deleteUser.fulfilled, (state, action)=>{
            state.loading = false
            const {id} = action.payload
            state.users = state.users.filter(item=> item.id !== id)
        })

        builder.addCase(deleteUser.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })


        builder.addCase(updatedUser.pending, (state)=>{
            state.loading = true
        })

        builder.addCase(updatedUser.fulfilled, (state, action)=>{
            state.loading = false
            state.users = state.users.map((item)=> (
                item.id === action.payload.id ? action.payload : item
            ))
        })

        builder.addCase(updatedUser.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload.message
        })
    }
})

// POST Data
export const createUser = createAsyncThunk("createuser", async(data, {rejectWithValue})=>{
    const response = await fetch("https://66aa0b4b613eced4eba75553.mockapi.io/crud", {
        method: "Post",
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

 //Get data
export const showUser = createAsyncThunk("showUser", async({rejectWithValue})=>{
    const response = await fetch("https://66aa0b4b613eced4eba75553.mockapi.io/crud")

    try {
        const result = await response.json()
        return result;

    } catch (error) {
        return rejectWithValue(error);
    }
})

// Delete Data
export const deleteUser = createAsyncThunk("deleteUser", async(id,{rejectWithValue})=>{
    const response = await fetch(`https://66aa0b4b613eced4eba75553.mockapi.io/crud/${id}`,
        {
            method:"Delete"
        }
    )

    try {
        const result = response.json()
        return result;
        
    } catch (error) {
        return rejectWithValue(error)
    }
})


export const updatedUser = createAsyncThunk("updatedUser", async(updatedData, {rejectWithValue})=>{
    console.log(updatedData);
    const response = await fetch(`https://66aa0b4b613eced4eba75553.mockapi.io/crud/${updatedData.id}`, {
        method: "PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(updatedData)
    })

    try {
        const result = await response.json()
        return result;
    } catch (error) {
       return rejectWithValue(error)   
    }
})


export default userDetailsSlice.reducer
export const {searchUser} = userDetailsSlice.actions;