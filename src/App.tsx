import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import AboutPage from "./pages/aboutPage/AboutPage"
import ProjectsPage from "./pages/projectsPage/ProjectsPage"
import SkillsPage from "./pages/skillsPage/SkillsPage"
import BackgroundPage from "./pages/backgroundPage/BackgroundPage"
import ContactPage from "./pages/contactPage/ContactPage"
import TriarPage from "./pages/triarPage/TriarPage"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/skills' element={<SkillsPage/>}/>
        <Route path='/background' element={<BackgroundPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/triar' element={<TriarPage/>}/>
      </Routes>
    </div>
  )
}

export default App
