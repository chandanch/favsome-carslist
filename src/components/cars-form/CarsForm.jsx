import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';

import { addCar, updateName, updatePrice, updateSearchTerm } from '../../store';
import styles from './CarsForm.module.css';
import { Grid } from '@mui/material';
import { reset } from '../../store/slices/formSlice';

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

	const { searchTerm } = useSelector((state) => {
		return state.favsomes.searchTerm;
	});

	const onFormSubmit = (event) => {
		console.log('submit form	');
		event.preventDefault();

		dispatch(addCar({ name, price }));
	};

	const onSearchTermChange = (event) => {
		dispatch(updateSearchTerm(event.target.value));
	};

	return (
		<div>
			<form className={styles.carsForm} onSubmit={onFormSubmit}>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs={12}>
						<TextField
							id='name'
							label='Search Cars!'
							variant='outlined'
							color='primary'
							value={searchTerm}
							onChange={onSearchTermChange}
							className={styles.carsFormTextField}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<hr />
					</Grid>
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
							onClick={() => dispatch(reset())}
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
