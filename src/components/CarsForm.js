import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { updateName, updatePrice } from '../store';
const CarsForm = () => {
	const dispatch = useDispatch();

	const handleNameChange = (event) => {
		dispatch(updateName(event.target.value));
	};

	const handlePriceChange = (event) => {
		dispatch(updatePrice(Number(event.target.value)));
	};

	const { name, price } = useSelector((state) => {
		return state.form;
	});

	return (
		<div>
			<TextField
				id='name'
				label='Car Name'
				variant='outlined'
				color='primary'
				value={name}
				onChange={handleNameChange}
			/>
			<TextField
				id='price'
				label='Car Price ($)'
				variant='outlined'
				color='primary'
				value={price || ''}
				type='number'
				onChange={handlePriceChange}
			/>
		</div>
	);
};

export default CarsForm;
