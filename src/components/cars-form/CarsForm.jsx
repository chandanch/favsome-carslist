import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';

import { addCar, updateName, updatePrice } from '../../store';
import styles from './CarsForm.module.css';
import { Grid } from '@mui/material';

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
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs={6}>
						<TextField
							id='name'
							label='Car Name'
							variant='outlined'
							color='primary'
							value={name}
							onChange={handleNameChange}
							className={styles.carsFormTextField}
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							id='price'
							label='Car Price ($)'
							variant='outlined'
							color='primary'
							value={price || ''}
							type='number'
							onChange={handlePriceChange}
							className={styles.carsFormTextField}
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<Button
							variant='contained'
							color='secondary'
							type='submit'
							className={styles.carsFormSubmitBtn}
							fullWidth
						>
							Add Car
						</Button>
					</Grid>
					<Grid item xs={6}>
						<Button
							variant='contained'
							color='danger'
							type='reset'
							className={styles.carsFormSubmitBtn}
							fullWidth
						>
							Reset Details
						</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

export default CarsForm;
