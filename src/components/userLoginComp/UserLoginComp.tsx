import styles from './_UserLoginComp.module.scss'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userLoginSchema } from '../../validations/zodUserSchemas';
import { IUserLoginData } from '../../Interfaces/userInterfaces';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAuth } from '../../redux/slices/userAuthSlice';
import { loginUser } from '../../redux/actions/actions';
import { useNavigate, Link } from 'react-router-dom';


const UserLoginComp = () => {

  const userAuth = useSelector(selectUserAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserLoginData>({
    resolver: zodResolver(userLoginSchema)
  })

  const onSubmit = async (data:IUserLoginData) => {
    console.log('data en onSubmit ', data)
    dispatch(loginUser(data));
    reset();
    navigate('/');
  };
  
  console.log('userAuth en LoginComp:  ',userAuth);
  
  console.log('document.cookie', document);

  const userAuthCompleteReducer = useSelector((state: any) => state.userAuth.data);
  console.log('userAuthCompleteReducer state.usrerAuth.data in LoginAction :',userAuthCompleteReducer);

 
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className={styles.title}>
            Ingresar
          </h2>
          <div className={styles.inputBlock}>
            <label htmlFor='dni'>Dni</label>
            <input type='text' {...register(
              'dni',
              { required: 'El dni es requerido' })}
              placeholder='Ingrese dni...'
            />
            {errors.dni && <span>{errors.dni.message}</span>}
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' {...register(
              'password',
              { required: 'La contraseña es requerida' })}
              placeholder='Ingrese contraseña...'
            />
          {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button
            className={styles.submit}
            type='submit'
          >
            Ingresar
          </button>
        </form>
        <p className={styles.linkContainer}>
          Aún no tenés una cuenta?
          <Link 
            to='/user-register'
            className={styles.register}
          >
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  )
}

export default UserLoginComp
