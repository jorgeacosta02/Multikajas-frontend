import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import ContactPage from "./pages/contactPage/ContactPage"
import UserRoutesComp from "./components/protectedRoutes/userRoutesComp/UserRoutesComp"
import IntranetPage from "./pages/intranetPage/IntranetPage"
import ArticleUpFormPage from "./pages/articleUpFormPage/ArticleUpFormPage"
import UserLoginPage from "./pages/userLoginPage/UserLoginPage"


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route element={<UserRoutesComp/>}>
          <Route path='/intranet' element={<IntranetPage/>} />
          {/* <Route path='/article-up-form' element={</>} /> */}
        </Route>
        <Route path='/login' element={<UserLoginPage/>}/>
        <Route path="/article-up-form" element={<ArticleUpFormPage/>}/>
      </Routes>
    </div>
  )
}

export default App
