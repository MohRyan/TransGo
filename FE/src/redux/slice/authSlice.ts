import { IAuthState } from "../types/state";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authCheckAsync, loginAsync } from "../async/authAsync";

interface IUser {
  id: string;
  username: string;
  fullname: string;
  email: string;
  password: string;
  profile?: string | null;
}

const initialState: IAuthState = {
  user: {} as IUser,
  isLogin: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state, action: PayloadAction<{ token: string; user: IUser }>) => {
      state.isLogin = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    LOGOUT: (state) => {
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        loginAsync.fulfilled,
        (state, action: PayloadAction<{ token: string; user: IUser }>) => {
          state.isLogin = true;
          state.token = action.payload.token;
          state.user = action.payload.user;
        }
      )
      .addCase(loginAsync.rejected, (state) => {
        state.isLogin = false;
        state.token = "";
        state.user = {} as IUser;
      })
      .addCase(loginAsync.pending, (state) => {
        state.isLogin = false;
      });

    builder
      .addCase(
        authCheckAsync.fulfilled,
        (state, action: PayloadAction<{ token: string; user: IUser }>) => {
          state.isLogin = true;
          state.token = action.payload.token;
          state.user = action.payload.user;
        }
      )
      .addCase(authCheckAsync.rejected, (state) => {
        state.isLogin = false;
        state.token = "";
        state.user = {} as IUser;
      })
      .addCase(authCheckAsync.pending, (state) => {
        state.isLogin = false;
      });
  },
});

export const { LOGIN, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
