const { createSlice } = require('@reduxjs/toolkit');

const filterReducer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, { payload }) {
      return payload;
    },
  },
});

export {filterReducer};
