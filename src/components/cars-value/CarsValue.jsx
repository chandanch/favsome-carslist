import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

const CarsValue = () => {
	const totalValue = useSelector(({ favsomes: { cars, searchTerm } }) =>
		cars
			.filter((car) =>
				car.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
			.reduce((accumulator, car) => accumulator + car.price, 0)
	);

	return (
		<div>
			<Typography variant='h5' color='primary'>
				Total Value: ${totalValue}
			</Typography>
		</div>
	);
};

export default CarsValue;
