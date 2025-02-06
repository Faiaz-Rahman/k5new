import { createSlice } from '@reduxjs/toolkit'

interface userProps {
    uid: string
    email: string | null
    displayName: string | null
    photoURL: string | null
}

interface AppState {
    isLoggedIn: boolean
    user: null | userProps
    socialLogin: boolean
}

const initialState = {
    isLoggedIn: false,
    user: null,
    socialLogin: false,
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
        updateUser(
            state,
            actions: {
                payload: { user: userProps; isLoggedIn: boolean }
            }
        ) {
            state.user = actions.payload.user
            state.isLoggedIn = actions.payload.isLoggedIn
        },
        updateIsSocialLogin(state, actions) {
            state.socialLogin = actions.payload
        },
    },
})

export const { login, logout, updateUser, updateIsSocialLogin } =
    authSlice.actions

export default authSlice.reducer
