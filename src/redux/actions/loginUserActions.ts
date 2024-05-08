import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUserDataFromDB } from '../../interfaces/userInterfaces';


export const loginUser: any = createAsyncThunk('/user-login', async (credentials: { dni: string; password: string }) => {
  try {
    const response = await axios.post<IUserDataFromDB, any>('/user-login', credentials);
    console.log('response.data en loginUser: ', response.data);
    const data = response.data;
    localStorage.setItem('accessLogin', JSON.stringify(data));
    return data;
  } catch (error) {
    throw new Error('Error en la solicitud de inicio de sesión');
  }
});
