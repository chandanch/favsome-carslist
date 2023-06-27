import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
	name: 'form',
	initialState: {
		name: '',
		price: 0,
	},
	reducers: {
		updateName: (state, action) => {
			state.name = action.payload;
		},
		updatePrice: (state, action) => {
			state.price = action.payload;
		},
	},
});

const { updateName, updatePrice } = formSlice.actions;
// get the combine reducer
const formReducer = formSlice.reducer;

export { updateName, updatePrice, formReducer };
