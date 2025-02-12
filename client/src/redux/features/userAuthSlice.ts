import { createSlice } from "@reduxjs/toolkit";

interface IUser {
    id: string
    name: string
    email: string
    password: string
}

export interface IAuth {
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
        setUser: (state, action) => {
        state.isAuthenticate = true,
            state.user = action.payload
            state.token = action.payload
        },
        logout: (state) => {
            state.isAuthenticate = false
            state.token = null
            state.user = null
        }
    }
});


export const {setUser, logout} = userAuthSlice.actions

export default userAuthSlice.reducer