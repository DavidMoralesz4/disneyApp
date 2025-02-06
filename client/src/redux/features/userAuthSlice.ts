import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  email: string;
}

interface IAuth {
  isAuthenticate: boolean;
  user: IUser | null;
  token: string | null

}

const initialState: IAuth = {
    isAuthenticate: false,
    user: null,
    token: null
};

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IAuth>) => {
            state.isAuthenticate = true
            state.token = action.payload.token
            state.user = action.payload.user
        },

        logout: (state) => {
            state.isAuthenticate = false
            state.token = null
            state.user = null
        }
    }
});


export const {login, logout} = userAuthSlice.actions

export default userAuthSlice.reducer