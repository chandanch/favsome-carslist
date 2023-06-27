import { React } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';

import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const root = createRoot(document.getElementById('root'));

const theme = createTheme({
	typography: {
		fontFamily: [
			'"Segoe UI"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		fontSize: 12,
	},
	palette: {
		primary: {
			main: '#9a02ee',
		},
		secondary: {
			main: '#0245ee',
		},
		danger: {
			main: '#ee3502',
		},
	},
});

root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>
);
