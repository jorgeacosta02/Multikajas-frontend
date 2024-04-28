import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import ContactPage from "./pages/contactPage/ContactPage"


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>

        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </div>
  )
}

export default App
