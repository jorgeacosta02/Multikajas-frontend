import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"

import SkillsPage from "./pages/skillsPage/SkillsPage"
import ContactPage from "./pages/contactPage/ContactPage"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>

        <Route path='/skills' element={<SkillsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </div>
  )
}

export default App
