import { createSlice } from '@reduxjs/toolkit';

export const signUpSlice = createSlice({
	name: 'signUp',
	initialState: {
		name: '',
		age: 0,
		petName: '',
		petType: '',
		textareaInfo: '',
		checkBox: false,
	},
	reducers: {
		setName: (state, action) => {
			state.name = action.payload;
		},
		setAge: (state, action) => {
			state.age = action.payload;
		},
		setPetName: (state, action) => {
			state.petName = action.payload;
		},
		setPetType: (state, action) => {
			state.petType = action.payload;
		},
		setTextarea: (state, action) => {
			state.textareaInfo = action.payload;
		},
		setCheckBox: (state, action) => {
			state.checkBox = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setName,
	setAge,
	setPetName,
	setPetType,
	setTextarea,
	setCheckBox,
} = signUpSlice.actions;

export default signUpSlice.reducer;
