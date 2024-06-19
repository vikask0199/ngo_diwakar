import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: localStorage.getItem('accessToken') || false, isLogedIn: localStorage.getItem('isLoggedIn') || false },
    
    reducers: {
        setCredentials: (state, action) => {
            const { token } = action.payload
            state.token = token
            state.isLogedIn = new Boolean(token).valueOf()
        },

        logout: (state, action) => {
            state.token = null
            state.isLogedIn = false;
        }
    },
})

export const { setCredentials, logout } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
export const selectIsLogedIn = (state) => state.auth.isLogedIn