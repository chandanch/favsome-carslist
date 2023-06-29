import { configureStore } from '@reduxjs/toolkit';
import {
	carsReducer,
	addCar,
	removeCar,
	updateSearchTerm,
} from './slices/carsSlice';
import { formReducer, updateName, updatePrice } from './slices/formSlice';

const store = configureStore({
	reducer: {
		favsomes: carsReducer,
		form: formReducer,
	},
});

export { store, addCar, removeCar, updateSearchTerm, updateName, updatePrice };
