import { configureStore } from '@reduxjs/toolkit';
import signUpReducer from '../redux/SignUp';

export const store = configureStore({
	reducer: {
		image: signUpReducer,
	},
});
