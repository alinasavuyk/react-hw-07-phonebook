import { contactApi } from './contactSlice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import filterReducer  from './filterSlice';

export const store = configureStore({
  reducer: {
     filter: filterReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,

  ],
});

setupListeners(store.dispatch);


