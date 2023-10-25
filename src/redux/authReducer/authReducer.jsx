import {
  createSlice,
  isAnyOf,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import {
  authLogOut,
  authLogin,
  authRegister,
  fetchUserToken,
} from 'redux/operation/operation';

export const userReducer = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
      password: '',
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(authRegister.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authLogin.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authLogOut.fulfilled, state => {
        state.user.name = '';
        state.user.email = '';
        state.user.password = '';
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchUserToken.fulfilled, (state, { payload }) => {
        if (state.token === null) {
          return;
        }
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addMatcher(
        isAnyOf(isPending(fetchUserToken, authLogOut, authLogin, authRegister)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          isRejected(fetchUserToken, authLogOut, authLogin, authRegister)
        ),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          isFulfilled(fetchUserToken, authLogOut, authLogin, authRegister)
        ),
        state => {
          state.isLoading = false;
        }
      );
  },
});
