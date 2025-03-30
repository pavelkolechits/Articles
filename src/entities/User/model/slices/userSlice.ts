import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/UserSchema'




const initialState: UserSchema = {}

const usesrSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      
    },
})

export const { reducer: userReducer, actions: userActions } = usesrSlice

