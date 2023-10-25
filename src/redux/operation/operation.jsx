import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const authRegister = createAsyncThunk('auth/register', async user => {
  try {
    const { data } = await axios.post('/users/signup', user);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const authLogin = createAsyncThunk('auth/login', async user => {
  try {
    const { data } = await axios.post('/users/login', user);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const authLogOut = createAsyncThunk('auth/logOut', async user => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset(data.token);
  } catch (error) {
    console.log(error);
  }
});

export const getContacts = createAsyncThunk('contatcs/get', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addContacts = createAsyncThunk('contatcs/add', async contact => {
  try {
    await axios.post('/contacts', contact);
  } catch (error) {
    console.log(error);
  }
});

export const deleteContacts = createAsyncThunk(
  'contatcs/delete',
  async contactId => {
    try {
      await axios.delete(`/contacts/${contactId}`);
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchUserToken = createAsyncThunk(
  'auth/relogin',
  async (_, thunkApi) => {
    const currentToken = thunkApi.getState().auth.token;

    if (currentToken === null) {
      return thunkApi.rejectWithValue(undefined);
    }

    token.set(currentToken);

    try {
      const { data } = await axios.get(`/users/current`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
