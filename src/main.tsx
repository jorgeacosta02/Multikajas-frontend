import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import axios from 'axios'

import './_main.module.scss'
import { store } from './redux/store/store.ts'

axios.defaults.baseURL = 'http://localhost:4000'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <App />
          </DndProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
