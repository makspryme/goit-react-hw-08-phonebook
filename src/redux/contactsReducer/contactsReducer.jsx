import { addContacts, getContacts } from 'redux/operation/operation';

const { createSlice } = require('@reduxjs/toolkit');

const contactsReducer = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        // return [...state, payload];
      })
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        console.log('refresh');
        return payload;
      });
  },
});

export { contactsReducer };
