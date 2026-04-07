import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  userId: string | null;
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  userId: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ userId: string; token: string }>,
    ) => {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.userId = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
