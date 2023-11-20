import { createAction } from '@reduxjs/toolkit';

// define an action with a type and a payload, namespace/action
export const setSearchTerm = createAction<string>('search/setSearchTerm');