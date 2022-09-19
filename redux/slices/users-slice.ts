import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state of the slice as an object
interface UserState {
  name: string;
}

// Define an initial state
const initialState: UserState = {
    name: '',
};

// Create a slice containing the configuration of the state
// and the reducers functions
const usersSlice = createSlice({
  name: '@users/getUser',
  initialState,
  reducers: {
    getUser(state, action: PayloadAction<string>) {
      state.name = action.payload.toLowerCase();
    },
  },
});

// Export each reducers function defined in createSlice
export const { getUser } = usersSlice.actions;

// Export default the slice reducer
export default usersSlice.reducer;