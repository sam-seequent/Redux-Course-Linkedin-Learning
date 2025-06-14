import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

export const store = configureStore({
  // Ch 2: Here we import the reducers we need to effectively manage the state of the application.
  // This is considered the global store of the application.

  // Ch 3: Now the rootReducer is imported from the reducers folder instead of multiple individual reducers.
  reducer: {
    reducer: rootReducer
  },
});
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
