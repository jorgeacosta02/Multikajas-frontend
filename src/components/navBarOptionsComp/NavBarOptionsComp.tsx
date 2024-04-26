import styles from './_NavBarOptionsComp.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectMoonState, toggleMoon } from '../../redux/slices/moonSlice';
import { setInLocalStorage } from '../localStorageComp/LocalStorageComp';


const NavBarOptionsComp = () => {

  const dispatch = useDispatch();

  const moonState = useSelector(selectMoonState).moon

  const moonHandler = () => {
    setInLocalStorage('mode','dark');
    return dispatch(toggleMoon())
  }

  const containerColor = `${styles.container} ${moonState ? styles.containerWhite : ''}`
  
  const svgColor = `${styles.svg} ${moonState ? styles.svgWhite : ''}`

  return (
    <div className={containerColor}>
      <div className={styles.optionContainer}>
        <svg 
          onClick={moonHandler}
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24"
          className={svgColor}
        >
          <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"/>
        </svg>
      </div>
    </div>
  );
}

export default NavBarOptionsComp;