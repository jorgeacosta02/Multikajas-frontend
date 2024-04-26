import { createSlice } from "@reduxjs/toolkit";


interface IMoon{
    moon: boolean
}

const initialState: IMoon = {
    moon: false
}

export const moonSlice = createSlice({
    name: 'moon',
    initialState,
    reducers: {
        toggleMoon: (state) => {
            state.moon = !state.moon
        }
    }
})

export const { toggleMoon } = moonSlice.actions;

export const selectMoonState = ( state:any ) => state.moon

export default moonSlice.reducer;