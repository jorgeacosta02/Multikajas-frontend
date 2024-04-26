import { createSlice } from "@reduxjs/toolkit";


interface Imessage{
    message: boolean
}

const initialState: Imessage = {
    message: false
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        toggleMessage: (state) => {
            state.message = !state.message
        },
        falseMessage: (state) => {
            state.message = false
        }
    }
})

export const { toggleMessage, falseMessage } = messageSlice.actions;

export const selectMessageState = ( state:any ) => state.message

export default messageSlice.reducer;