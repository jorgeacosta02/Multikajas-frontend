import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import ContactPage from "./pages/contactPage/ContactPage"
import IntranetPage from "./pages/intranetPage/IntranetPage"


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/intranet" element={<IntranetPage/>}/>
      </Routes>
    </div>
  )
}

export default App
