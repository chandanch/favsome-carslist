import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';

import { addCar, updateName, updatePrice } from '../../store';
import styles from './CarsForm.module.css';

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

	const onFormSubmit = (event) => {
		console.log('submit form	');
		event.preventDefault();

		dispatch(addCar({ name, price }));
	};

	return (
		<div>
			<form className={styles.carsForm} onSubmit={onFormSubmit}>
				<TextField
					id='name'
					label='Car Name'
					variant='outlined'
					color='primary'
					value={name}
					onChange={handleNameChange}
					className={styles.carsFormTextField}
				/>
				<TextField
					id='price'
					label='Car Price ($)'
					variant='outlined'
					color='primary'
					value={price || ''}
					type='number'
					onChange={handlePriceChange}
					className={styles.carsFormTextField}
				/>

				<Button
					variant='contained'
					color='primary'
					type='submit'
					className={styles.carsFormSubmitBtn}
				>
					Add Car
				</Button>
			</form>
		</div>
	);
};

export default CarsForm;
