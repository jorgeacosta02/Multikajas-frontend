import styles from './_TriarComp.module.scss'
import home from '../../assets/images/triar/home.png'
// import contact from '../../assets/images/triar/contact.png'
// import navBarFree from '../../assets/images/triar/navBar-free.png'
// import navBarRegistred from '../../assets/images/triar/navBar-registred.png'
// import turnos from '../../assets/images/triar/turnos.png'
// import userLogin from '../../assets/images/triar/userLogin.png'
// import userProfile from '../../assets/images/triar/userProfile.png'
// import userRegister from '../../assets/images/triar/userRegister copy.png'
// import workerLogin from '../../assets/images/triar/workerLogin.png'
// import workerProfile from '../../assets/images/triar/workerProfile.png'
import { useSelector } from 'react-redux'
import { selectLangState } from '../../redux/slices/langSlice'



const TriarComp = () => {

    // Estados globales
    const langState = useSelector(selectLangState).lang


    return (
        <div>
        <ul className={styles.ul}>
            <li className={styles.li}>
                <img src={home} alt="Home" />
                <h2>{ langState === 'es' ? 'Página inicio' : 'Home Page'}</h2>
                <p>
                    {
                        langState === 'es'
                        ? 'Página de inicio del sitio, muestra una barra de navegación con las páginas principales, '
                        : 'Home page of the site, displays a navigation bar with the main pages,'
                    }
                </p>
            </li>
        </ul>
        </div>
    )
}

export default TriarComp
