import { Typography, AppBar, Toolbar, Box } from '@mui/material';

import CarsList from './components/CarsList';
import CarsForm from './components/CarsForm';

import './styles/App.css';

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
				<hr />
				<CarsList />
			</div>
		</div>
	);
};

export default App;
