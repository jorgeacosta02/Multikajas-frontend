import styles from './_NavBarLayout.module.scss';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavBarLogoComp from "../../components/navBarLogoComp/NavBarLogoComp";
import NavBarNavListComp from "../../components/navBarNavListComp/NavBarNavListComp";
import NavBarMenuComp from "../../components/navBarMenuComp/NavBarMenuComp";
import NavBarOptionsComp from "../../components/navBarOptionsComp/NavBarOptionsComp";
import { selectMoonState } from '../../redux/slices/moonSlice';


const NavBarLayout: React.FC = () => {

  const [scrollingDown, setScrollingDown] = useState(false);

  const  moonState = useSelector(selectMoonState).moon;

  console.log(moonState)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setScrollingDown(currentScrollPosition > 0); // Cambio aquí, utilizando un valor fijo
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollingStyles = `${styles.navBar} ${
    scrollingDown ?
      moonState ?
        styles.backgLight :
        styles.backgDark 
    : ''}`

  return (
    <div className={scrollingStyles}>
      <NavBarLogoComp/>
      <NavBarOptionsComp/>
      <NavBarMenuComp/>
      <NavBarNavListComp/>
    </div>
  )
}

export default NavBarLayout

