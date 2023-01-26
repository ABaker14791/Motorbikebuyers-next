import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	user: {}, // for user object
	userToken: null, // for storing the JWT or ID?
	error: null,
	success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.userToken = action.payload.accessToken;
			state.user = action.payload;
		},
	},
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
