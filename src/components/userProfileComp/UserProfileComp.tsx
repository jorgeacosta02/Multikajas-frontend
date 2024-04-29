// import styles from './_UserProfileComp.module.scss'
// import { getDataFromLocalStorage, cleanDataInLocalStorage } from '../localStorageComp/LocalStorageComp'
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { cleanUser } from '../../redux/slices/userAuthSlice'

// const UserProfileComp = () => {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const user = getDataFromLocalStorage('accessLogin').user;

//     const clickHandler = () => {
//         cleanDataInLocalStorage('accessLogin');
//         dispatch(cleanUser());
//         navigate('/');
//     }

//     const goBackHandler = () => {
//         navigate(-1)
//     }

//     return (
//         <div className={styles.container}>
//             <div className={styles.dataContainer}>
//                 <h1 className={styles.title}>Mi perfil</h1>
//                 <div className={styles.data}>
//                     <p>{`Nombre: ${user.firstName.toUpperCase()}`}</p>
//                     <p>{`Apellido: ${user.lastName.toUpperCase()}`}</p>
//                     <p>{`Dni: ${user.dni ? user.dni : 'sin número'}`}</p>
//                     <p>{`Teléfono: ${user.phone}`}</p>
//                     <p>{`Email: ${user.email}`}</p>
//                 </div>
//                 <div className={styles.buttons}>
//                     <button
//                         onClick={clickHandler}
//                         className={styles.button}
//                     >
//                         Cerrar sesión
//                     </button>
//                     <button
//                         onClick={goBackHandler}
//                         className={styles.button}
//                     >
//                         Volver
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UserProfileComp
