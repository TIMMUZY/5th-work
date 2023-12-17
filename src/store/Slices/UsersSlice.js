import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    path: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setPath: (state, action) => {
      state.path = action.payload;
    },
  },
});

export const { setUsers, setLoading, setError, setPath } = usersSlice.actions;
export const selectUsers = (state) => state.users.data;
export const selectLoading = (state) => state.users.isLoading;
export const selectError = (state) => state.users.error;
export const selectPath = (state) => state.users.path;

export default usersSlice.reducer;