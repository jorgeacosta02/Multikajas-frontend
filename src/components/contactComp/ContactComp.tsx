import styles from './_ContactComp.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import SliderComp from '../sliderComp/SliderComp';
import LinksComp from '../linksComp/LinksComp';
import MessageComp from '../messageComp/MessageComp';
import { selectMoonState } from '../../redux/slices/moonSlice';
import { selectMessageState, toggleMessage } from '../../redux/slices/messageSlice';


export interface IFormDataShape {
  name: string,
  email: string,
  subject: string,
  message: string
}

// let queryResponse:any = false

const ContactComp: React.FC = () => {

  // Estados globales para opciones
  const moonState = useSelector(selectMoonState).moon;
  const messageState = useSelector(selectMessageState).message;

  const dispatch = useDispatch()
  
  // Estado de datos del formulario
  const [formData, setFormData] = useState<IFormDataShape>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Estado de errores del formulario
  const [errors, setErrors] = useState<IFormDataShape>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Comprobación de estados para enviar formulario
  let submitOk = false;
  
  if(
    formData.name !== '' &&
    formData.email !== '' &&
    formData.subject !== '' &&
    formData.message !== '' &&
    errors.name === '' &&
    errors.email === '' &&
    errors.subject === '' &&
    errors.message === '' 
  ){
    submitOk = true;
  };
  
  // Expresiones de validación
  const nameRegExp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]*$/;
  const emailRegExp = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Valida solo letras
    if (name === 'name'){
      if(!nameRegExp.test(value)){
        setErrors((prevData) => ({
          ...prevData,
          [name]: 'El nombre debe contener solo letras.'
        }));
      }else{
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setErrors((prevData) => ({
          ...prevData,
          [name]: '',
        }));
      }
    }

    // Valida campo email
    if (name === 'email'){
      if(!emailRegExp.test(value)){
        setErrors((prevData) => ({
          ...prevData,
          [name]: 'Debe ingresar un mail válido.'
        }));
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }else{
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setErrors((prevData) => ({
          ...prevData,
          [name]: '',
        }));
      }
    }
    if (name === 'subject' || name === 'message'){
       setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setErrors((prevData) => ({
        ...prevData,
        [name]: '',
      }));
    }
    console.log('name y value in handleInputChange: ',name, value);
    console.log('formData y errors in handleInputChange: ',formData, errors);
  }

  const emptyMessage = 'Este campo debe ser completado.';

  const emptyValidationHandler =()=>{
    if(!formData.name){
      setErrors((prevData) => ({
        ...prevData,
        name: emptyMessage,
      }));
    };
    if(!formData.email){
      setErrors((prevData) => ({
        ...prevData,
        email: emptyMessage,
      }));
    };
    if(!formData.subject){
      setErrors((prevData) => ({
        ...prevData,
        subject: emptyMessage,
      }));
    };
    if(!formData.message){
      setErrors((prevData) => ({
        ...prevData,
        message: emptyMessage,
      }));
    };
  };
  
  // constantes de estilos para dark-mode
  const containerColor = `${styles.container} ${moonState ? styles.containerWhite : ''}`;
  const inputColor = `${styles.input} ${moonState ? styles.backWhite : ''}`;
  const textareaColor = `${styles.textarea} ${moonState ? styles.backWhite : ''}`;
  const submitColor = `${styles.submit} ${moonState ? styles.backWhite : ''}`;
  
  
  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log('submit')
    if(!submitOk) return emptyValidationHandler();
    submitForm();
  }
  
  const messageHandleClick = () => {
    dispatch( toggleMessage() );
  };

  const submitForm = async () => {
    try{
      const response = await axios.post(
        // 'https://newportfolio-backend.onrender.com/contact',
        'http://localhost:4000/contact',
         formData
      );
      console.log('response', response.status);
      // queryResponse = await response.status;
      setFormData({
        name:'',
        email:'',
        subject:'',
        message:''
      })

      messageHandleClick()

      // const toastOptions: ToastOptions = {
      //   style: {
      //     background: '#333',
      //     color: '#fff',
      //     zIndex: 2100,
      //     position: 'absolute' // Posición del toast
      //     // Otros estilos según sea necesario
      //   },
      //   position: 'top-right' // Posición del toast
      // };
      
      // toast.success("Mensaje enviado correctamente", toastOptions);
    }catch(error:any){
      console.log(error.message)
    }
  }
  
  return (
    // <div className={styles.mainContainer}>
      <div className={containerColor}>
        <SliderComp/>
        <div className={styles.dataMainContainer}>
          <h4 className={styles.dataTitle}>
            Datos de contacto
          </h4>
          <div className={styles.dataContainer}>
            <div className={styles.data}>
              <div className={styles.dataBlock}>
                <h6>
                  Correo electrónico:
                </h6>
                <p>
                  jorgeacostadeleon@yahoo.com
                </p>
              </div>
              <div className={styles.dataBlock}>
                <h6>
                  Teléfono:
                </h6>
                <p>
                  +54 9 264-673 0581
                </p>
              </div>
              <div className={styles.dataBlock}>
                <h6>
                  Domicilio:
                </h6>
                <p>
                  Barrio Cooperarq VIII - Manzana "A" - Casa 24 - Rivadavia - San Juan - Argentina. CP. 5400.
                </p>
              </div>
            </div>
            <LinksComp/>
          </div>
        </div>
        <div className={styles.formContainer}>
          <h4 className={styles.formTitle}>
            Envíame un mensaje
          </h4>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div className={styles.inputBlock}>
              <label 
                htmlFor='name'>
               Nombre
              </label>
              <input
                type='text'
                id='name'
                name='name' 
                value={formData.name}
                onChange={handleInputChange} 
                placeholder='Ingrese nombre...'
                className={inputColor}
              />
              {
                errors.name 
                && 
                <p className={styles.errorMessage}>
                  {errors.name}
                </p>
              }
            </div>
            <div className={styles.inputBlock}>
              <label 
                htmlFor='email'>
                Correo
              </label>
              <input 
                type='text'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                className={inputColor}
                placeholder='Ingrese correo...'
              />
              {
                errors.email 
                && 
                <p className={styles.errorMessage}>
                  {errors.email}
                </p>
              }
            </div>
            <div className={styles.inputBlock}>
              <label 
                htmlFor='subject'>
                Asunto
              </label>
              <input 
                type="text"
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleInputChange}
                placeholder='Ingrese asunto...'
                className={inputColor}
              />
              {
                errors.subject 
                && 
                <p className={styles.errorMessage}>
                  {errors.subject}
                </p>
              }
            </div>
            <div className={styles.inputBlock}>
              <label 
                htmlFor='message'>
                Mensaje
              </label>
              <textarea 
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                placeholder='Ingrese su mensaje...'
                className={textareaColor}
              />
              {
                errors.message 
                && 
                <p className={styles.errorMessage}>
                  {errors.message}
                </p>
              }
            </div>
            <button
              className={submitColor}
              type='submit'
            >
              <p>
                Enviar
              </p>
            </button>
          </form>
        </div>
      { messageState && 
      <MessageComp
        data='Mensaje enviado exitosamente'
      />}
    </div>
  )
}

export default ContactComp

