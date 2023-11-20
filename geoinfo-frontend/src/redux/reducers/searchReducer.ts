// this file contains the reducer which specifies how the state changes in response
import { createReducer } from '@reduxjs/toolkit';

import { setSearchTerm } from '../actions/searchActions';

// define the initial state
const initialState = '';

// create a reduce that handles the setSearchTerm action
const searchReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSearchTerm, (_, action) => {
    // update the state with the new search term from the action payload
    return action.payload;
  });
});

export default searchReducer;