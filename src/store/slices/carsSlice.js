import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		searchTerm: '',
		cars: [],
	},
	reducers: {
		addCar: (state, action) => {
			state.push({
				...action.payload,
				id: nanoid(),
			});
		},
		removeCar: (state, action) => {
			const filteredCars = state.cars.filter(
				(car) => car.id !== action.payload
			);
			state.cars = filteredCars;
		},
		updateSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
		},
	},
});

const { addCar, removeCar, updateSearchTerm } = carsSlice.actions;

const carsReducer = carsSlice.reducer;

export { addCar, removeCar, updateSearchTerm, carsReducer };
