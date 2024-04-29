import { configureStore } from "@reduxjs/toolkit"
import menuReducer from '../slices/menuSlice'
import moonReducer from '../slices/moonSlice'
import messageReducer from '../slices/messageSlice'

export const store = configureStore ({
  reducer: {
    menu: menuReducer,
    moon: moonReducer,
    message: messageReducer,
  }
})