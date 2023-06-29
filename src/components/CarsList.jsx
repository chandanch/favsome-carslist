import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';

const CarsList = () => {
	const cars = useSelector((state) => {
		return state.cars.cars;
	});

	const displayCarsList = () => {
		const carsList = cars.map((car) => {
			return (
				<ListItem
					key={car.id}
					disablePadding
					secondaryAction={
						<IconButton edge='end' aria-label='delete'>
							<DeleteIcon color='danger' />
						</IconButton>
					}
				>
					<ListItemButton>
						<ListItemText
							primary={
								<Typography variant='h6' color='primary'>
									{car.name} ${car.price}
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
			<Typography variant='h3' color='secondary'>
				Cars List
			</Typography>
			<List>{displayCarsList()}</List>
		</div>
	);
};

export default CarsList;
