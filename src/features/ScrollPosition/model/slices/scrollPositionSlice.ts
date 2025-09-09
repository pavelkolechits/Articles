import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ScrollPositionSchema } from '../types/scrollPositionSchema'





const initialState: ScrollPositionSchema = {
    scroll: {}
}

const scrollPositionSlice = createSlice({
    name: 'scrollPosition',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string, position: number}>) => {
            state.scroll[action.payload.path] = action.payload.position
        }
      
    },
})

export const { reducer: scrollPositionReducer, actions: scrollPositionActions } = scrollPositionSlice