import { Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { updateSearchTerm } from '../../store';

const CarsSearch = () => {
	const dispatch = useDispatch();

	const { searchTerm } = useSelector((state) => {
		return state.favsomes.searchTerm;
	});

	const onSearchTermChange = (event) => {
		dispatch(updateSearchTerm(event.target.value));
	};

	return (
		<div>
			<Grid container spacing={2} alignItems='center'>
				<Grid item xs={12}>
					<TextField
						id='name'
						label='Search Cars!'
						variant='outlined'
						color='primary'
						value={searchTerm}
						type='search'
						onChange={onSearchTermChange}
						fullWidth
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default CarsSearch;
