// // actions.ts
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { IUserDataFromDB } from '../Interfaces/userInterfaces';
// import { IWorkerDataFromDB } from '../Interfaces/workerInterfaces';


// export const loginUser: any = createAsyncThunk('user/loginUser', async (credentials: { dni: number; password: string }) => {
//   try {
//     const response = await axios.post<IUserDataFromDB, any>('/user-login', credentials);
//     console.log('response.data en loginUser: ', response.data);
//     const data = response.data;
//     localStorage.setItem('accessLogin', JSON.stringify(data));
//     return data;
//   } catch (error) {
//     throw new Error('Error en la solicitud de inicio de sesión');
//   }
// });

// export const loginWorker: any = createAsyncThunk('worker/loginWorker', async (credentials: { dni: number; password: string }) => {
//   try {
//     const response = await axios.post<IWorkerDataFromDB, any>('/worker-login', credentials);
//     console.log('response.data en loginWorker: ', response.data);
//     const data = response.data;
//     localStorage.setItem('accessLogin', JSON.stringify(data));
//     return data;
//   } catch (error) {
//     throw new Error('Error en la solicitud de inicio de sesión');
//   }
// });