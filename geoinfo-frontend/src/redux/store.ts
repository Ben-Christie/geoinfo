// this file creates the redux store, which holds the state
import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './reducers/searchReducer';

// create the redux store, combining reducers if you have more than one
const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;