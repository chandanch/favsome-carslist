import { React } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';

import App from './App';

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
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
);
