import styles from './_ArticleUpFormComp.module.scss';
import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageComp from '../messageComp/MessageComp';
import { IArticleData } from '../../interfaces/articleInterfaces';
import { selectMessageState, toggleMessage } from '../../redux/slices/messageSlice';
import ImageUploading, { ImageListType } from 'react-images-uploading';


const ArticleUpFormComp = () => {
  // Estados globales para opciones
  const messageState = useSelector(selectMessageState).message;
  const dispatch = useDispatch();

  // Estado de datos del formulario
  const [formInfo, setFormInfo] = useState<IArticleData>({
    type: '',
    brand: '',
    model: '',
    year: '',
    condition: '',
    description: '',
    images: [], // Array para almacenar las imágenes
    price: '',
  });

  // Estado de errores del formulario
  const [errors, setErrors] = useState<Partial<IArticleData>>({
    type: '',
    brand: '',
    model: '',
    year: '',
    condition: '',
    description: '',
    images: [],
    price: '',
  });

  // Comprobación de estados para enviar formulario
  // let submitOk = false;

  // if (
  //   formInfo.type !== '' &&
  //   formInfo.brand !== '' &&
  //   formInfo.model !== '' &&
  //   formInfo.year !== '' &&
  //   formInfo.condition !== '' &&
  //   formInfo.description !== '' &&
  //   formInfo.price !== '' &&
  //   formInfo.images.length > 0 // Verificamos si hay imágenes cargadas
  // ) {
  //   submitOk = true;
  // }

  // Expresiones de validación
  // const emptyMessage = 'Este campo debe ser completado.';

  // const emptyValidationHandler = () => {
  //   let newErrors: Partial<IArticleData> = {};

  //   if (!formInfo.type) {
  //     newErrors.type = emptyMessage;
  //   }
  //   if (!formInfo.brand) {
  //     newErrors.brand = emptyMessage;
  //   }
  //   if (!formInfo.model) {
  //     newErrors.model = emptyMessage;
  //   }
  //   if (!formInfo.year) {
  //     newErrors.year = emptyMessage;
  //   }
  //   if (!formInfo.condition) {
  //     newErrors.condition = emptyMessage;
  //   }
  //   if (!formInfo.description) {
  //     newErrors.description = emptyMessage;
  //   }
  //   if (!formInfo.price) {
  //     newErrors.price = emptyMessage;
  //   }
  //   if (formInfo.images.length === 0) {
  //     newErrors.images = 'Debe cargar al menos una imagen.';
  //   }
  //   setErrors(newErrors);
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // if (!submitOk) return emptyValidationHandler();
    submitForm();
  };

  const messageHandleClick = () => {
    dispatch(toggleMessage());
  };


  console.log('formInfo.images: ', formInfo.images);
  

  const submitForm = async () => {
    try {
      const imageUploadPromises = formInfo.images.map(async (image:any) => {

        if (image.dataURL) {
          const formData = new FormData();
          formData.append('file', image.dataURL);
          formData.append('upload_preset', 'Presets_react');
          const response = await axios.post(
            'https://api.cloudinary.com/v1_1/duyhgdoqn/image/upload',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          );
          console.log('response.data.url: ',response.data.url);
          
          return response.data.url;

        }
          // En este caso, el elemento no tiene una propiedad 'file', así que puedes manejarlo según tus necesidades
          return null;
      }
      );

      const imageUrls = await Promise.all(imageUploadPromises);

      console.log('imageUrls: ', imageUrls);

      setFormInfo({ ...formInfo, images: imageUrls });

      
      
      const response = await axios.post(
        'http://localhost:4000/article',
        { ...formInfo, images: imageUrls }
      );

      console.log('formInfo: ', formInfo);

      console.log('response', response.status);
      
      setFormInfo({
        type: '',
        brand: '',
        model: '',
        year: '',
        condition: '',
        description: '',
        images: [], // Limpiamos el array de imágenes después de enviar el formulario
        price: '',
      });
      messageHandleClick();
    } catch (error: any) {
      console.log(error.message);
    }
  };



  // const submitForm = async () => {
  //   try {
  //     const response = await axios.post(
  //       'http://localhost:4000/article',
  //       formInfo
  //     );
  //     console.log('response', response.status);
  //     setFormInfo({
  //       type: '',
  //       brand: '',
  //       model: '',
  //       year: '',
  //       condition: '',
  //       description: '',
  //       images: [], // Limpiamos el array de imágenes después de enviar el formulario
  //       price: '',
  //     });
  //     messageHandleClick();
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };

  const handleImageChange = (imageList: ImageListType) => {
    setFormInfo((prevData:any) => ({
      ...prevData,
      images: imageList.map((image) => ({ dataURL: image.dataURL })),
    }));
    setErrors((prevErrors:any) => ({
      ...prevErrors,
      images: [],
    }));
  };

  console.log({formInfo});
  

  return (
    <div className={styles.container}>
      <div className={styles.backImgContainer}></div>
      <div className={styles.backImgCover}></div>
      <h3 className={styles.mainTitle}>Alta de artículo</h3>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.dataContainer}>
            <div className={styles.inputBlock}>
              <label htmlFor="type">Tipo:</label>
              <input
                type="text"
                id="type"
                name="type"
                value={formInfo.type}
                onChange={handleInputChange}
                placeholder="Ingrese tipo..."
                className={styles.input}
              />
              {errors.type && (
                <p className={styles.errorMessage}>{errors.type}</p>
              )}
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="brand">Marca:</label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formInfo.brand}
                onChange={handleInputChange}
                placeholder="Ingrese marca..."
                className={styles.input}
              />
              {errors.brand && (
                <p className={styles.errorMessage}>{errors.brand}</p>
              )}
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="model">Modelo:</label>
              <input
                type="text"
                id="model"
                name="model"
                value={formInfo.model}
                onChange={handleInputChange}
                placeholder="Ingrese modelo..."
                className={styles.input}
              />
              {errors.model && (
                <p className={styles.errorMessage}>{errors.model}</p>
              )}
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="year">Año:</label>
              <input
                type="text"
                id="year"
                name="year"
                value={formInfo.year}
                onChange={handleInputChange}
                placeholder="Ingrese año..."
                className={styles.input}
              />
              {errors.year && 
                <p className={styles.errorMessage}>{errors.year}</p>
              }
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="condition">Condición:</label>
              <input
                type="text"
                id="condition"
                name="condition"
                value={formInfo.condition}
                onChange={handleInputChange}
                placeholder="Ingrese condición..."
                className={styles.input}
              />
              {errors.condition && (
                <p className={styles.errorMessage}>{errors.condition}</p>
              )}
            </div>
            <div className={styles.inputBlock}>
              <label htmlFor="description">Descripción:</label>
              <textarea
                id="description"
                name="description"
                value={formInfo.description}
                onChange={handleInputChange}
                placeholder="Ingrese descripción..."
                className={styles.input}
              />
              {errors.description && (
                  <p className={styles.errorMessage}>{errors.description}</p>
                )}
              </div>
              <div className={styles.inputBlock}>
                <label htmlFor="price">Precio:</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formInfo.price}
                  onChange={handleInputChange}
                  placeholder="Ingrese precio..."
                  className={styles.input}
                />
                {errors.price && (
                  <p className={styles.errorMessage}>{errors.price}</p>
                )}
              </div>
              {/* Agregar carga de imágenes */}
              <div className={styles.inputBlock}>
                <label>Cargar imágenes:</label>
                <ImageUploading
                  multiple
                  value={formInfo.images}
                  onChange={handleImageChange}
                  maxNumber={3}
                  dataURLKey="dataURL"
                >
                  {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      // onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                    <div className={styles.upload__image__wrapper}>
                      <button
                        className={styles.upload__image}
                        style={isDragging ? { color: 'red' } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        Seleccionar imágenes
                      </button>
                      &nbsp;
                      <button
                        className={styles.upload__image}
                        onClick={onImageRemoveAll}
                      >
                        Eliminar todas las imágenes
                      </button>
                      {imageList.map((image, index) => (
                        <div key={index} className={styles.image__container}>
                          <img src={image.dataURL} alt="" className={styles.uploaded__image} />
                          <div className={styles.remove__image} onClick={() => onImageRemove(index)}>
                            Eliminar
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
                {errors.images && (
                  <p className={styles.errorMessage}>{errors.images}</p>
                )}
              </div>
            </div>
            <div className={styles.submitContainer}>
              <button
                className={styles.submit}
                type="submit"
              >
                Enviar formulario
              </button>
            </div>
          </form>
          <div className={styles.linksContainer}>
            <Link
              to="/intranet"
              className={styles.link}
            >
              Volver a Intranet
            </Link>
          </div>
        </div>
        {messageState && (
          <MessageComp
            data="Mensaje enviado exitosamente"
          />
        )}
      </div>
    );
  };
  
  export default ArticleUpFormComp;
  

                  



























// import styles from './_ArticleUpFormComp.module.scss';
// import { useState } from 'react';
// import axios from 'axios'
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import MessageComp from '../messageComp/MessageComp';
// import { IArticleData } from '../../interfaces/articleInterfaces';
// import { selectMessageState, toggleMessage } from '../../redux/slices/messageSlice';


// const ArticleUpFormComp = () => {

//    // Estados globales para opciones
//   const messageState = useSelector(selectMessageState).message;
//   const dispatch = useDispatch()
   
//   // Estado de datos del formulario
//   const [formData, setFormData] = useState<IArticleData>({
//       type:'',
//       brand:'',
//       model:'',
//       year:'',
//       contition:'',
//       description:'',
//       image:'',
//       price:'',
//   });
 
//    // Estado de errores del formulario
//    const [errors, setErrors] = useState<IArticleData>({
//       type:'',
//       brand:'',
//       model:'',
//       year:'',
//       contition:'',
//       description:'',
//       image:'',
//       price:'',
//    });
   
//    // Comprobación de estados para enviar formulario
//    let submitOk = false;
  
//   if(
//     formData.type !== '' &&
//     formData.brand !== ''
//     // formData.group1 !== '' &&
//     // formData.group2 !== ''
//   ){
//     submitOk = true;
//   };
   
//    // Expresiones de validación
//   //  const nameRegExp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]*$/;
//   //  const emailRegExp = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
 
//    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//      const { name, value } = e.target;
//          setFormData((prevData) => ({
//            ...prevData,
//            [name]: value,
//          }));
//          setErrors((prevData) => ({
//            ...prevData,
//            [name]: '',
//          }));
//    }
 
//    const emptyMessage = 'Este campo debe ser completado.'
 
//    const emptyValidationHandler =()=>{
//      if(!formData.type){
//        setErrors((prevData) => ({
//          ...prevData,
//          firstName: emptyMessage,
//        }));
//      };
//      if(!formData.brand){
//        setErrors((prevData) => ({
//          ...prevData,
//          email: emptyMessage,
//        }));
//      };
   
//    };
   
   
//    const handleSubmit = (event:any) => {
//      event.preventDefault();
//      console.log('submit')
//      if(!submitOk) return emptyValidationHandler();
//      submitForm();
//    }
   
//    const messageHandleClick = () => {
//      dispatch( toggleMessage() );
//    };
 
//    const submitForm = async () => {
//      try{
//        const response = await axios.post(
//          'http://localhost:4000/article',
//           formData
//        );
//        console.log('response', response.status);
//        // queryResponse = await response.status;
//       setFormData({
//         type:'',
//         brand:'',
//         model:'',
//         year:'',
//         contition:'',
//         description:'',
//         image:'',
//         price:'',
//       })
 
//        messageHandleClick()

//      }catch(error:any){
//        console.log(error.message)
//      }
//    }

  
//   return (
//     <div className={styles.container}>
//       <div className={styles.backImgContainer}></div>
//       <div className={styles.backImgCover}></div>
//       <h3 className={styles.mainTitle}>
//         Alta de artículo
//       </h3>
//       <div className={styles.formContainer}>
//         <form
//           onSubmit={handleSubmit}
//           className={styles.form}
//         >
//           <div className={styles.dataContainer}>
//             <div className={styles.inputBlock}>
//               <label 
//                 htmlFor='type'>
//                 Tipo:
//               </label>
//               <input
//                 type='text'
//                 id='type'
//                 name='type' 
//                 value={formData.type}
//                 onChange={handleInputChange} 
//                 placeholder='Ingrese tipo...'
//                 className={styles.input}
//               />
//               {
//                 errors.type 
//                 && 
//                 <p className={styles.errorMessage}>
//                   {errors.type}
//                 </p>
//               }
//             </div>
//             <div className={styles.inputBlock}>
//               <label 
//                 htmlFor='brand'>
//                 Marca:
//               </label>
//               <input
//                 type='text'
//                 id='brand'
//                 name='brand' 
//                 value={formData.brand}
//                 onChange={handleInputChange} 
//                 placeholder='Ingrese marca...'
//                 className={styles.input}
//               />
//               {
//                 errors.brand 
//                 && 
//                 <p className={styles.errorMessage}>
//                   {errors.brand}
//                 </p>
//               }
//             </div>
//             <div className={styles.inputBlock}>
//               <label 
//                 htmlFor='model'>
//                 Modelo
//               </label>
//               <input
//                 type='text'
//                 id='model'
//                 name='model' 
//                 value={formData.model}
//                 onChange={handleInputChange} 
//                 placeholder='Ingrese modelo...'
//                 className={styles.input}
//               />
//               {/* {
//                 errors.description 
//                 && 
//                 <p className={styles.errorMessage}>
//                   {errors.description}
//                 </p>
//               } */}
//             </div>
//             <div className={styles.inputBlock}>
//               <label 
//                 htmlFor='year'>
//                 Año:
//               </label>
//               <input
//                 type='text'
//                 id='year'
//                 name='year' 
//                 value={formData.year}
//                 onChange={handleInputChange} 
//                 placeholder='Ingrese año...'
//                 className={styles.input}
//               />
//               {/* {
//                 errors.description 
//                 && 
//                 <p className={styles.errorMessage}>
//                   {errors.description}
//                 </p>
//               } */}
//             </div>
//           </div>
//           <div className={styles.submitContainer}>
//             <button
//               className={styles.submit}
//               type='submit'
//             >
//               Enviar formulario
//             </button>
//           </div>
//         </form>
//         <div className={styles.linksContainer}>
//           <Link
//             to='/intranet'
//             className={styles.link}
//           >
//             Volver a Intranet
//           </Link>
//         </div>
//       </div>
//       { messageState && 
//       <MessageComp
//         data='Mensaje enviado exitosamente'
//       />}
//     </div>
//   )
// }

// export default ArticleUpFormComp

