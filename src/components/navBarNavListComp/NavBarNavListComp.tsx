import { NavLink } from "react-router-dom";
import styles from './_NavBarNavListComp.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectMenuState, falseMenu } from "../../redux/slices/menuSlice";
import { selectMoonState } from "../../redux/slices/moonSlice";

// import { getDataFromLocalStorage } from "../localStorageComp/LocalStorageComp";


const NavBarNavListComp = () => {

  // const accessLogin = getDataFromLocalStorage('accessLogin');
  // console.log('user in navBarNavList:', accessLogin);
  // const userId = accessLogin?.user?.id;
  // console.log('userId en NavBarNavListComp: ', userId);
  // const userAuth = useSelector(selectUserAuth); 
  // const userAuthId = userAuth?.data?.user?.id;
  // console.log(userAuth)
  
  // si utilizo useSelector con menuReducer no necesito importarlo
  const menuCompleteReducer = useSelector((state: any) => state.menu.menu);
  // si lo utilizo con la slice separada, sí necesito importarlo.
  const menuReducer = useSelector(selectMenuState)

  const moonState = useSelector(selectMoonState)

  console.log('menuCompleteReducer: ', menuCompleteReducer)

  const dispatch = useDispatch<any>();

  const handleClick = () => {
    dispatch( falseMenu() );
  };

  const navListStyles = `${styles.navList} ${menuReducer.menu ? styles.show : ''}`;

  const navLinkColor = `${styles.navLink} ${moonState.moon ? styles.navLinkWhite : ''}`

  const navListColor = `${navListStyles} ${moonState.moon ? styles.navListWhite : ''}`

  return (
    <ul className={navListColor} >
      <li
        className={styles.li}
        onClick={handleClick}
      >
        <NavLink
          to="/"
          className={navLinkColor} 
        >
          Inicio
        </NavLink>
      </li>
      {/* <li 
      className={styles.li}
      onClick={handleClick} >
        <NavLink
          to="/about" 
          className={navLinkColor} 
        >
          {langState === 'es' ? 'Sobre mí' : 'About me'}
        </NavLink>
      </li> */}
      {/* <li 
      className={styles.li}
      onClick={handleClick} >
        <NavLink
          to="/projects" 
          className={navLinkColor} 
        >
          {langState === 'es' ? 'Proyectos' : 'Projects'}
        </NavLink>
      </li> */}
      {/* <li 
      className={styles.li}
      onClick={handleClick} >
        <NavLink
          to="/skills" 
          className={navLinkColor} 
        >
          {langState === 'es' ? 'Tecnologías' : 'Skills'}
        </NavLink>
      </li> */}
      {/* <li 
      className={styles.li}
      onClick={handleClick} >
        <NavLink
          to="/background" 
          className={navLinkColor} 
        >
          {langState === 'es' ? 'Formación' : 'Background'}
        </NavLink>
      </li> */}
      <li 
      className={styles.li}
      onClick={handleClick} >
        <NavLink
          to="/contact" 
          className={navLinkColor} 
        >
          Contacto
        </NavLink>
      </li>
      <li 
      className={styles.li}
      onClick={handleClick} >
        <NavLink
          to="/intranet" 
          className={navLinkColor} 
        >
          Intranet
        </NavLink>
      </li>
    </ul>
  )
}

export default NavBarNavListComp
