import styles from './_IntranetComp.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cleanInLocalStorage } from '../localStorageComp/LocalStorageComp';
import { cleanUser } from '../../redux/slices/userAuthSlice';


const IntranetComp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const user = getFromLocalStorage('accessLogin').user;

    const signOutHandler = () => {
        cleanInLocalStorage('accessLogin');
        dispatch(cleanUser());
        navigate('/');
    }

    const goBackHandler = () => {
        navigate('/')
    }

  return (
    <div className={styles.container}>
        <div className={styles.backImgContainer}></div>
        <div className={styles.backImgCover}></div>
        <h3 className={styles.mainTitle}>
            Intranet
        </h3>
        <div className={styles.dataContainer}>
            <h4 className={styles.blockTitle}>
                Generar formulario de:
            </h4>
            <div className={styles.linksContainer}>
                <NavLink 
                    to='/article-up-form'
                    className={styles.link}
                >
                    Alta de artículo
                </NavLink>
                <div className={styles.buttons}>
                    <button
                        onClick={signOutHandler}
                        className={styles.link}
                    >
                        Cerrar sesión
                    </button>
                    <button
                        onClick={goBackHandler}
                        className={styles.link}
                    >
                        Inicio
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntranetComp