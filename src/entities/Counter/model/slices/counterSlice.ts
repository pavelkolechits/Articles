import { createSlice } from '@reduxjs/toolkit'
import { CounterSchema } from '../types/CounterSchema'




const initialState: CounterSchema = {
    value: 0
}

const counterSlice = createSlice<CounterSchema>({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
    },
})

export const { reducer: counterReducer, actions: counterActions } = counterSlice
