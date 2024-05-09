// import { useState } from 'react';
// import { useDrop } from 'react-dnd';
// import ImageUploading, { ImageListType } from 'react-images-uploading';
// import axios from 'axios';
// import styles from './_ESServicesFormComp.module.scss';


// const ESServicesFormComp = () => {
  
//   // const cloudinaryName: string | undefined = process.env.REACT_APP_CLOUDINARY_NAME;

//   // console.log(cloudinaryName);

//   const [images, setImages] = useState<ImageListType>([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const [, drop] = useDrop({
//     accept: 'image',
//     drop: (item: any) => handleDrop(item),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//       canDrop: !!monitor.canDrop(),
//     }),
//     options: { dropEffect: 'copy' },
//   });

//   const handleDrop = async (item: any) => {
//     try {
//       const formData = new FormData();
//       formData.append('file', item.file);
//       formData.append('upload_preset', 'Presets_react');

//       const cloudinaryResponse = await axios.post(
//         `https://api.cloudinary.com/v1_1/duyhgdoqn/image/upload`,
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
        
//       console.log(cloudinaryResponse.data)

//       const imageUrl = cloudinaryResponse.data.secure_url;

//       setImages((prevImages) => [...prevImages, { dataURL: imageUrl }]);
//     } catch (error) {
//       console.error('Error al cargar la imagen a Cloudinary:', error);
//     }
//   };

//   const handleRemove = (index: number) => {
//     setImages((prevImages) => prevImages.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async () => {
//     try {
//       // 1. Cargar cada imagen a Cloudinary y obtener las URLs
//       const uploadPromises = images.map(async (image) => {
//         // Verificar si image.file es definido antes de usarlo
//         if (image.file) {
//           const formData = new FormData();
//           formData.append('file', image.file);
//           formData.append('upload_preset', 'Presets_react');
      
//           const cloudinaryResponse = await axios.post(
//             `https://api.cloudinary.com/v1_1/duyhgdoqn/image/upload`,
//             formData,
//             {
//               headers: {
//                 'Content-Type': 'multipart/form-data',
//               },
//             }
//           );
      
//           return cloudinaryResponse.data.secure_url;
//         }
      
//         // En este caso, el elemento no tiene una propiedad 'file', así que puedes manejarlo según tus necesidades
//         return null;
//       });
  
//       // 2. Obtener todas las URLs de las imágenes
//       const uploadedImageUrls = await Promise.all(uploadPromises);
  
//       // 3. Crear el objeto formData para enviar al servidor
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('description', description);
  
//       // 4. Agregar las URLs de las imágenes al formData
//       uploadedImageUrls.forEach((imageUrl, index) => {
//         formData.append(`images[${index}]`, imageUrl);
//       });
  
//       // 5. Realizar la solicitud POST al servidor
//       await axios.post('/exploservice/service', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       setImages([]);
//       setTitle('');
//       setDescription('');
//     } catch (error) {
//       // Manejar los errores de carga
//       console.error('Error al enviar formulario:', error);
//     }
//   };
  

//   return (
//     <div ref={drop}>
//       <div className={styles.container}>
//         <h1>ALTA DE SERVICIO</h1>
//         <div className={styles.dataContainer}>
//           <div className={styles.textContainer}>
//             <div className={styles.inputBlock}>
//               <label>Nombre:</label>
//               <input
//                 type="text"
//                 value={title}
//                 placeholder='Ingrese nombre del servicio...'
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//             <div className={styles.inputBlock}>
//               <label>Descripción:</label>
//               <textarea
//                 value={description}
//                 placeholder='Ingrese descripción del servicio...'
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </div>
//           </div>
//           <ImageUploading
//             multiple
//             value={images}
//             onChange={(imageList) => setImages(imageList)}
//             maxNumber={6}
//           >
//             {({ onImageUpload }) => (
//               <div className={styles.mediaContainer}>
//                 <button onClick={onImageUpload} className={styles.imgButton}>
//                   Seleccionar Imágenes
//                 </button>
//                 <div className={styles.imgContainer}>
//                   {images.map((image, index) => (
//                     <div className={styles.imgBlock} key={index}>
//                       {/* Muestra la imagen seleccionada */}
//                       <img
//                         src={image.dataURL}
//                         alt={`img-${index}`}
//                       />
//                       <button
//                         onClick={() => handleRemove(index)}
//                         className={styles.xButton}
//                       >
//                         X
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </ImageUploading>
//         </div>
//         <button onClick={handleSubmit} className={styles.imgButton}>
//           Cargar Servicio
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ESServicesFormComp;






























// import React from 'react';
import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import axios from 'axios';
import styles from './_ESServicesFormComp.module.scss';

const ESServicesFormComp = () => {
  
  const [images, setImages] = useState<ImageListType>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [, drop] = useDrop({
    accept: 'image',
    drop: (item: any) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
    options: { dropEffect: 'copy' },
  });

  const handleDrop = async (item: any) => {
    try {
      const formData = new FormData();
      formData.append('file', item.file);
      formData.append('upload_preset', 'Presets_react');

      const cloudinaryResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/duyhgdoqn/image/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
        
      console.log(cloudinaryResponse.data)

      const imageUrl = cloudinaryResponse.data.secure_url;

      setImages((prevImages) => [...prevImages, { dataURL: imageUrl }]);
    } catch (error) {
      console.error('Error al cargar la imagen a Cloudinary:', error);
    }
  };

  const handleRemove = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    try {
      // 1. Cargar cada imagen a Cloudinary y obtener las URLs
      const uploadPromises = images.map(async (image) => {
        // Verificar si image.file es definido antes de usarlo
        if (image.file) {
          const formData = new FormData();
          formData.append('file', image.file);
          formData.append('upload_preset', 'Presets_react');
      
          const cloudinaryResponse = await axios.post(
            `https://api.cloudinary.com/v1_1/duyhgdoqn/image/upload`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          );
      
          return cloudinaryResponse.data.secure_url;
        }
      
        // En este caso, el elemento no tiene una propiedad 'file', así que puedes manejarlo según tus necesidades
        return null;
      });
  
      // 2. Obtener todas las URLs de las imágenes
      const uploadedImageUrls = await Promise.all(uploadPromises);
  
      // 3. Crear el objeto formData para enviar al servidor
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
  
      // 4. Agregar las URLs de las imágenes al formData
      uploadedImageUrls.forEach((imageUrl, index) => {
        formData.append(`images[${index}]`, imageUrl);
      });
  
      // 5. Realizar la solicitud POST al servidor
      await axios.post('/article', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setImages([]);
      setTitle('');
      setDescription('');
    } catch (error) {
      // Manejar los errores de carga
      console.error('Error al enviar formulario:', error);
    }
  };
  

  return (
    // <DndProvider backend={HTML5Backend}>
      <div ref={drop}>
        <div className={styles.container}>
          <h1>ALTA DE SERVICIO</h1>
          <div className={styles.dataContainer}>
            <div className={styles.textContainer}>
              <div className={styles.inputBlock}>
                <label>Nombre:</label>
                <input
                  type="text"
                  value={title}
                  placeholder='Ingrese nombre del servicio...'
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className={styles.inputBlock}>
                <label>Descripción:</label>
                <textarea
                  value={description}
                  placeholder='Ingrese descripción del servicio...'
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <ImageUploading
              multiple
              value={images}
              onChange={(imageList) => setImages(imageList)}
              maxNumber={6}
            >
              {({ onImageUpload }) => (
                <div className={styles.mediaContainer}>
                  <button onClick={onImageUpload} className={styles.imgButton}>
                    Seleccionar Imágenes
                  </button>
                  <div className={styles.imgContainer}>
                    {images.map((image, index) => (
                      <div className={styles.imgBlock} key={index}>
                        {/* Muestra la imagen seleccionada */}
                        <img
                          src={image.dataURL}
                          alt={`img-${index}`}
                        />
                        <button
                          onClick={() => handleRemove(index)}
                          className={styles.xButton}
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
          </div>
          <button onClick={handleSubmit} className={styles.imgButton}>
            Cargar Servicio
          </button>
        </div>
      </div>
    // </DndProvider>
  );
};

export default ESServicesFormComp;


































// import { useState } from 'react';
// import { useDrop, DropTargetMonitor } from 'react-dnd';
// import { NativeTypes } from 'react-dnd-html5-backend';
// import ImageUploading, { ImageListType } from 'react-images-uploading';
// import axios from 'axios';
// import styles from './_ESServicesFormComp.module.scss';
// import { DndProvider } from 'react-dnd';


// const ESServicesFormComp = () => {
//   const [images, setImages] = useState<ImageListType>([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const [, drop] = useDrop({
//     accept: NativeTypes.FILE,
//     drop: (item: { files: FileList }, monitor: DropTargetMonitor) => {
//       if (monitor) {
//         const files = item.files;
//         handleDrop(files);
//       }
//     },
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//       canDrop: !!monitor.canDrop(),
//     }),
//   });

//   const handleDrop = async (droppedFiles: FileList) => {
//     try {
//       const formData = new FormData();
//       formData.append('file', droppedFiles[0]);
//       formData.append('upload_preset', 'Presets_react');

//       const cloudinaryResponse = await axios.post(
//         `https://api.cloudinary.com/v1_1/duyhgdoqn/image/upload`,
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
        
//       console.log(cloudinaryResponse.data)

//       const imageUrl = cloudinaryResponse.data.secure_url;

//       setImages((prevImages) => [...prevImages, { dataURL: imageUrl }]);
//     } catch (error) {
//       console.error('Error al cargar la imagen a Cloudinary:', error);
//     }
//   };

//   const handleRemove = (index: number) => {
//     setImages((prevImages) => prevImages.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async () => {
//     try {
//       // 1. Cargar cada imagen a Cloudinary y obtener las URLs
//       const uploadPromises = images.map(async (image) => {
//         const formData = new FormData();
//         formData.append('file', image.fileList[0].file);
//         formData.append('upload_preset', 'Presets_react');
  
//         const cloudinaryResponse = await axios.post(
//           `https://api.cloudinary.com/v1_1/duyhgdoqn/image/upload`,
//           formData,
//           {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//             },
//           }
//         );
  
//         return cloudinaryResponse.data.secure_url;
//       });
  
//       // 2. Obtener todas las URLs de las imágenes
//       const uploadedImageUrls = await Promise.all(uploadPromises);
  
//       // 3. Crear el objeto formData para enviar al servidor
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('description', description);
  
//       // 4. Agregar las URLs de las imágenes al formData
//       uploadedImageUrls.forEach((imageUrl, index) => {
//         formData.append(`images[${index}]`, imageUrl);
//       });
  
//       // 5. Realizar la solicitud POST al servidor
//       await axios.post('/exploservice/service', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       setImages([]);
//       setTitle('');
//       setDescription('');
//     } catch (error) {
//       // Manejar los errores de carga
//       console.error('Error al enviar formulario:', error);
//     }
//   };
  
  

//   return (
//     <DndProvider backend={HTML5Backend}>
//     <div ref={drop}>
//       <div className={styles.container}>
//         <h1>ALTA DE SERVICIO</h1>
//         <div className={styles.dataContainer}>
//           <div className={styles.textContainer}>
//             <div className={styles.inputBlock}>
//               <label>Nombre:</label>
//               <input
//                 type="text"
//                 value={title}
//                 placeholder='Ingrese nombre del servicio...'
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//             <div className={styles.inputBlock}>
//               <label>Descripción:</label>
//               <textarea
//                 value={description}
//                 placeholder='Ingrese descripción del servicio...'
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </div>
//           </div>
//           <ImageUploading
//             multiple
//             value={images}
//             onChange={(imageList) => setImages(imageList)}
//             maxNumber={6}
//             dataURLKey="data_url"
//           >
//             {({ onImageUpload }) => (
//               <div className={styles.mediaContainer}>
//                 <button onClick={onImageUpload} className={styles.imgButton}>
//                   Seleccionar Imágenes
//                 </button>
//                 <div className={styles.imgContainer}>
//                   {images.map((image, index) => (
//                     <div className={styles.imgBlock} key={index}>
//                       {/* Muestra la imagen seleccionada */}
//                       <img
//                         src={image.data_url}
//                         alt={`img-${index}`}
//                       />
//                       <button
//                         onClick={() => handleRemove(index)}
//                         className={styles.xButton}
//                       >
//                         X
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </ImageUploading>
//         </div>
//         <button onClick={handleSubmit} className={styles.imgButton}>
//           Cargar Servicio
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ESServicesFormComp;
































// import { useState } from 'react';
// import { useDrop } from 'react-dnd';
// import ImageUploading, { ImageListType } from 'react-images-uploading';
// import axios from 'axios';
// import styles from './_ESServicesFormComp.module.scss';


// const ESServicesFormComp = () => {
  
//   // const cloudinaryName: string | undefined = process.env.REACT_APP_CLOUDINARY_NAME;

//   // console.log(cloudinaryName);

//   const [images, setImages] = useState<ImageListType>([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const [, drop] = useDrop({
//     accept: 'image',
//     drop: (item: any) => handleDrop(item),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//       canDrop: !!monitor.canDrop(),
//     }),
//     options: { dropEffect: 'copy' },
//   });

//   const handleDrop = async (item: any) => {
//     try {
//       const formData = new FormData();
//       formData.append('file', item.file);
//       formData.append('upload_preset', 'Presets_react');

//       const cloudinaryResponse = await axios.post(
//         `https://api.cloudinary.com/v1_1/duyhgdoqn/image/upload`,
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
        
//       console.log(cloudinaryResponse.data)

//       const imageUrl = cloudinaryResponse.data.secure_url;

//       setImages((prevImages) => [...prevImages, { dataURL: imageUrl }]);
//     } catch (error) {
//       console.error('Error al cargar la imagen a Cloudinary:', error);
//     }
//   };

//   const handleRemove = (index: number) => {
//     setImages((prevImages) => prevImages.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async () => {
//     try {
//       // 1. Cargar cada imagen a Cloudinary y obtener las URLs
//       const uploadPromises = images.map(async (image) => {
//         // Verificar si image.file es definido antes de usarlo
//         if (image.file) {
//           const formData = new FormData();
//           formData.append('file', image.file);
//           formData.append('upload_preset', 'Presets_react');
      
//           const cloudinaryResponse = await axios.post(
//             `https://api.cloudinary.com/v1_1/duyhgdoqn/image/upload`,
//             formData,
//             {
//               headers: {
//                 'Content-Type': 'multipart/form-data',
//               },
//             }
//           );
      
//           return cloudinaryResponse.data.secure_url;
//         }
      
//         // En este caso, el elemento no tiene una propiedad 'file', así que puedes manejarlo según tus necesidades
//         return null;
//       });
  
//       // 2. Obtener todas las URLs de las imágenes
//       const uploadedImageUrls = await Promise.all(uploadPromises);
  
//       // 3. Crear el objeto formData para enviar al servidor
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('description', description);
  
//       // 4. Agregar las URLs de las imágenes al formData
//       uploadedImageUrls.forEach((imageUrl, index) => {
//         formData.append(`images[${index}]`, imageUrl);
//       });
  
//       // 5. Realizar la solicitud POST al servidor
//       await axios.post('/exploservice/service', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       setImages([]);
//       setTitle('');
//       setDescription('');
//     } catch (error) {
//       // Manejar los errores de carga
//       console.error('Error al enviar formulario:', error);
//     }
//   };
  

//   return (
//     <div ref={drop}>
//       <div className={styles.container}>
//         <h1>ALTA DE SERVICIO</h1>
//         <div className={styles.dataContainer}>
//           <div className={styles.textContainer}>
//             <div className={styles.inputBlock}>
//               <label>Nombre:</label>
//               <input
//                 type="text"
//                 value={title}
//                 placeholder='Ingrese nombre del servicio...'
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
//             <div className={styles.inputBlock}>
//               <label>Descripción:</label>
//               <textarea
//                 value={description}
//                 placeholder='Ingrese descripción del servicio...'
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </div>
//           </div>
//           <ImageUploading
//             multiple
//             value={images}
//             onChange={(imageList) => setImages(imageList)}
//             maxNumber={6}
//           >
//             {({ onImageUpload }) => (
//               <div className={styles.mediaContainer}>
//                 <button onClick={onImageUpload} className={styles.imgButton}>
//                   Seleccionar Imágenes
//                 </button>
//                 <div className={styles.imgContainer}>
//                   {images.map((image, index) => (
//                     <div className={styles.imgBlock} key={index}>
//                       {/* Muestra la imagen seleccionada */}
//                       <img
//                         src={image.dataURL}
//                         alt={`img-${index}`}
//                       />
//                       <button
//                         onClick={() => handleRemove(index)}
//                         className={styles.xButton}
//                       >
//                         X
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </ImageUploading>
//         </div>
//         <button onClick={handleSubmit} className={styles.imgButton}>
//           Cargar Servicio
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ESServicesFormComp;