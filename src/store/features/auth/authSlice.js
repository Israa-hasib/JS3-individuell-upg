import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
    user: null,
    loading: false,
    error: null
}

export const registerUser = createAsyncThunk('auth/Registration', async (formData, thunkAPI) => {
    try {
        return await authService.signUp(formData.email, formData.password)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logInU = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
    try {
        return await authService.logInDude(formData.email, formData.password)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: { setError: (state, action ) => {
        state.error = action.payload
    }
    },
    extraReducers: (builder) => {
        builder

        //Register
        .addCase(registerUser.pending, state => {
            state.loading = true
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.loading = false
            state.error = null
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })



        //Login
        .addCase(logInU.pending, state => {
            state.loading = true
        })
        .addCase(logInU.fulfilled, (state, action) => {
            state.user = action.payload
            state.loading = false
            state.error = null
        })
        .addCase(logInU.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    
    }
    
})

export const { setError } = authSlice.actions

export default authSlice.reducer