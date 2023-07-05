import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';

import { removeCar } from '../store';

const CarsList = () => {
	const theme = useTheme();
	const priceTextColor = theme.palette.pricer;

	const cars = useSelector((state) => {
		return state.favsomes.cars;
	});

	const searchTerm = useSelector((state) => {
		return state.favsomes.searchTerm;
	});

	const carNameInput = useSelector((state) => {
		return state.form.name;
	});

	const filteredCars = cars.filter((car) =>
		car.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const dispatch = useDispatch();

	const deleteCar = (id) => {
		console.log('ID', id);
		dispatch(removeCar(id));
	};

	const displayCarsList = () => {
		const carsList = filteredCars.map((car) => {
			return (
				<ListItem
					key={car.id}
					disablePadding
					secondaryAction={
						<IconButton
							edge='end'
							aria-label='delete'
							onClick={() => deleteCar(car.id)}
						>
							<DeleteIcon color='danger' />
						</IconButton>
					}
				>
					<ListItemButton>
						<ListItemText
							primary={
								<Typography variant='h6' color='secondary'>
									{car.name}
								</Typography>
							}
							secondary={
								<Typography
									variant='h6'
									sx={{ color: priceTextColor.main }}
								>
									${car.price}
								</Typography>
							}
						/>
					</ListItemButton>
				</ListItem>
			);
		});

		return carsList;
	};

	return (
		<div className='dede'>
			<Typography variant='h5' color='secondary' align='center'>
				Cars List
			</Typography>
			<Divider />
			<List>{displayCarsList()}</List>
		</div>
	);
};

export default CarsList;
