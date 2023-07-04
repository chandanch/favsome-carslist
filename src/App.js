import { Typography, AppBar, Toolbar, Box } from '@mui/material';

import CarsList from './components/CarsList';
import CarsForm from './components/cars-form/CarsForm';

import './styles/App.css';
import CarsSearch from './components/cars-search/CarsSearch';

const App = () => {
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='fixed' color='primary'>
					<Toolbar>
						<Typography variant='h6' sx={{ flexGrow: 1 }}>
							FavSome Cars!
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<Toolbar />
			<div className='favs-container'>
				<CarsForm />
				<br />
				<hr />
				<CarsSearch />
				<br />
				<CarsList />
			</div>
		</div>
	);
};

export default App;
