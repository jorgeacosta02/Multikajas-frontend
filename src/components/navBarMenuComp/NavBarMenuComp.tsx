import styles from './_NavBarMenuComp.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, selectMenuState } from '../../redux/slices/menuSlice';
import { selectMoonState } from '../../redux/slices/moonSlice';

const NavBarMenuComp = () => {

  const dispatch = useDispatch<any>();

  const menuReducer = useSelector(selectMenuState);

  const moonState = useSelector(selectMoonState);

  console.log(menuReducer);

  const handleClick = () => {
    dispatch( toggleMenu() );
  };

  const menuColor = `${styles.menu} ${moonState.moon ? styles.menuWhite : ''}`

  return (
    <div className={styles.container}>
      <svg
        className={menuColor}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="3 3 18 18" 
        onClick={handleClick}
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
    </div>
  )
}

export default NavBarMenuComp
