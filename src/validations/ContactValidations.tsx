// import { useSelector } from "react-redux"
// import { FormDataShape } from "../components/contactComp/ContactComp"
// import { selectLangState } from "../redux/slices/langSlice"


// // REGEX
// const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


// console.log('validations')
// // NAME VALIDATIONS
// export const nameCorrectValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {
    
//     // const  langState = useSelector(selectLangState).lang
//     const  langState = 'en'
//     const { name } = data;

//     console.log('data in validations: ', data)
//     console.log('data.name in validations: ', data.name)
 
//     if (name !== '' && !nameRegex.test(name)){
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             name: langState === 'es' ? 'El nombre debe contener solo letras' : 'The name must  contain only letters',
//         }))
//     } else {
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             name: '',
//         }));
//     };

// }
// export const nameExistsValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {
    
//     const  langState = useSelector(selectLangState).lang
//     const response = langState ? 'Debe ingresar un nombre.' : 'You must enter a name.'
//     const { name } = data;
 
//     if (name === ''){
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             name: response
//         }))
//     } else {
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             name: ''
//         }))
//     };
// }


// // EMAIL VALIDATIONS
// export const emailCorrectValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {

//     const { email } = data;

//     if (email !== '' && !emailRegex.test(email)){
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             email: "Debe ser una dirección de email"
//         }))
//     } else {
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             email: '',
//         }));
//     };
// }

// export const emailExistsValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {
    
//     const { email } = data;
 
//     if (email === ''){
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             email: "Ingresa un email"
//         }))
//     };
// }

// // SUBJECT VALIDATIONS
// export const subjectExistsValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {
    
//     const { subject } = data;
 
//     if (subject === ''){
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             subject: 'Ingresa un asunto'
//         }))
//     } else {
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             subject: ''
//         }))
//     };
// }

// // MESSAGE VALIDATIONS
// export const messageExistsValidation = (data: FormDataShape, setErrors: React.Dispatch<React.SetStateAction<FormDataShape>>) => {
    
//     const { message } = data;
 
//     if (message === ''){
//         setErrors((prevErrors) => ({
//             ...prevErrors,
//             message: "Ingresa un mensaje"
//         }))
//     };
// }
