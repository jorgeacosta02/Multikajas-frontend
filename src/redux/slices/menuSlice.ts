import { createSlice } from "@reduxjs/toolkit";


interface Imenu{
    menu: boolean
}

const initialState: Imenu = {
    menu: false
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.menu = !state.menu
        },
        falseMenu: (state) => {
            state.menu = false
        }
    }
})

export const { toggleMenu, falseMenu } = menuSlice.actions;

export const selectMenuState = ( state:any ) => state.menu

export default menuSlice.reducer;