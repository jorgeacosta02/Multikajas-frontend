import NavBarLayout from "../../layouts/navBarLayout/NavBarLayout"
import HomeComp from "../../components/homeComp/HomeComp"
import FooterComp from "../../components/footerComp/FooterComp"

const HomePage = () => {
  return (
    <div>
      <NavBarLayout/>
      <HomeComp/>
      <FooterComp/>
    </div>
  )
}

export default HomePage
