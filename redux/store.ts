import { configureStore } from '@reduxjs/toolkit';

// Import the previously created search slice
import usersSlice from './slices/users-slice';

// Create the store, adding the search slice to it
export const store = configureStore({
  reducer: {
    search: usersSlice,
  },
});

// Export some helper types used to improve type-checking
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;