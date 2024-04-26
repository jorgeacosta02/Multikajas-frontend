import styles from './_ContactComp.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import SliderComp from '../sliderComp/SliderComp';
import LinksComp from '../linksComp/LinksComp';
import MessageComp from '../messageComp/MessageComp';
import { selectLangState } from '../../redux/slices/langSlice';
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
  const langState = useSelector(selectLangState).lang;
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
          [name]: langState === 'es' ? 'El nombre debe contener solo letras.' : 'The name must contain only letters.',
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
          [name]: langState === 'es' ? 'Debe ingresar un mail válido.': 'You must enter  a valid email.',
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

  const emptyMessage = langState === 'es' ?
    'Este campo debe ser completado.' :
    'This field must be filled out.';

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
        'http://localhost:5001/contact',
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
            {langState === 'es' ? 'Mis datos de contacto' : 'My contact data'}
          </h4>
          <div className={styles.dataContainer}>
            <div className={styles.data}>
              <div className={styles.dataBlock}>
                <h6>
                  {langState === 'es' ? 'Correo electrónico:' : 'Email:'}
                </h6>
                <p>
                  jorgeacostadeleon@yahoo.com
                </p>
              </div>
              <div className={styles.dataBlock}>
                <h6>
                  {langState === 'es' ? 'Teléfono:' : 'Phone number:'}
                </h6>
                <p>
                  +54 9 264-673 0581
                </p>
              </div>
              <div className={styles.dataBlock}>
                <h6>
                  {langState === 'es' ? 'Domicilio:' : 'Address:'}
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
            {langState === 'es' ? 'Envíame un mensaje' : 'Send me a message'}
          </h4>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div className={styles.inputBlock}>
              <label 
                htmlFor='name'>
                {langState === 'es' ? 'Nombre' : 'Name'}
              </label>
              <input
                type='text'
                id='name'
                name='name' 
                value={formData.name}
                onChange={handleInputChange} 
                placeholder={langState === 'es' ? 'Ingrese nombre...' :  'Enter name...'}
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
                {langState === 'es' ? 'Correo'  : 'Email'}
              </label>
              <input 
                type='text'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                className={inputColor}
                placeholder={langState === 'es' ? 'Ingrese correo...' : 'Enter email...'}
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
                {langState === 'es'  ? 'Asunto' : 'Subject'}
              </label>
              <input 
                type="text"
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={langState === 'es' ? 'Ingrese asunto...' : 'Enter subject...'}
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
                {langState === 'es' ? 'Mensaje' : 'Message'}
              </label>
              <textarea 
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                placeholder={langState === 'es' ? 'Ingrese su mensaje...' : 'Enter your message...'}
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
                { langState === 'es' ? 'Enviar' : 'Submit' }
              </p>
            </button>
          </form>
        </div>
      { messageState && 
      <MessageComp
        data={ langState === 'es' ?
                'Mensaje enviado exitosamente' :
                'Message sent successfully'
              }
      />}
    </div>
  )
}

export default ContactComp

