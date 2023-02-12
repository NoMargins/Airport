import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import './styles.scss';
import Header from './header/Header';
import MainBody from './main/MainBody';
import FlightInfo from './flights/FlightsInfo';
import FooterElem from './footer/Footer.jsx';
import FlightDetails from './flights/flight-results/FlightDetails';

const App = () => {
	return (
		<main>
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/' element={<MainBody />} />
						<Route path='/searching' element={<FlightInfo />} />
						<Route path='/searching/details' element={<FlightDetails />} />
					</Routes>
				</BrowserRouter>
				<FooterElem />
			</Provider>
		</main>
	);
};

export default App;
