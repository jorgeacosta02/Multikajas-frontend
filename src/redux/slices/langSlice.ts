import { createSlice } from "@reduxjs/toolkit";


interface ILang{
    lang: string
}

const initialState: ILang = {
    lang: 'en'
}

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLang: (state, action) => {
            state.lang = action.payload
        }
    }
})

export const { setLang } = langSlice.actions;

export const selectLangState = ( state:any ) => state.lang

export default langSlice.reducer;