import { nanoid } from 'nanoid';

const { createSlice } = require('@reduxjs/toolkit');

const contactsReducer = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add: {
      reducer(state, { payload }) {
        return [...state, payload];
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    remove(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export { contactsReducer };
