import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AppState {
    isLoggedIn: boolean
    user: null | Object
}

const initialState = {
    isLoggedIn: false,
    user: null,
} satisfies AppState as AppState

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, actions) {
            console.log('loggin in')
            state.isLoggedIn = actions.payload.isLoggedIn
            state.user = actions.payload.user
        },
        logout(state) {
            state.isLoggedIn = false
            state.user = null
        },
    },
})

// export const { increment, decrement, incrementByAmount } =
//     authSlice.actions

export const { login, logout } = authSlice.actions

export default authSlice.reducer
