import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface subscriptionType {
  isSubscribed: boolean
  plan_name: string
  plan_price: string
}

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
  subscription: subscriptionType
}

const initialState = {
  isLoggedIn: false,
  user: null,
  socialLogin: false,
  subscription: {
    isSubscribed: false,
    plan_name: '',
    plan_price: '',
  },
} satisfies AppState as AppState

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, actions) {
      state.isLoggedIn = actions.payload.isLoggedIn
      state.user = actions.payload.user
    },
    logout(state) {
      state.isLoggedIn = false
      state.user = null
    },
    updateUser(
      state,
      actions: PayloadAction<{
        user: userProps | null
        isLoggedIn: boolean
      }>,
    ) {
      state.user = actions.payload.user
      state.isLoggedIn = actions.payload.isLoggedIn
    },
    updateIsSocialLogin(state, actions) {
      state.socialLogin = actions.payload
    },
    // used payload action @here
    updateSubscriptionStatus(
      state,
      actions: PayloadAction<{
        isSubscribed: boolean
        plan_name: string
        plan_price: string
      }>,
    ) {
      state.subscription = actions.payload
    },
  },
})

export const {
  login,
  logout,
  updateUser,
  updateIsSocialLogin,
  updateSubscriptionStatus,
} = authSlice.actions

export default authSlice.reducer
