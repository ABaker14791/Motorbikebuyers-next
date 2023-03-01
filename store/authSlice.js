import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	user: null, // for user object
	displayName: null,
	uid: null, // for storing the JWT or ID?
	emailVerified: null,
	error: null,
	success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

export const { login, logout } = authSlice.actions;

// selectors
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
