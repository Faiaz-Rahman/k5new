import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    isLoggedIn: boolean
    user: null | Object
}

const initialState = {
    isLoggedIn: false,
    user: null,
} satisfies CounterState as CounterState

const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
})

// export const { increment, decrement, incrementByAmount } =
//     authSlice.actions
export default authSlice.reducer
