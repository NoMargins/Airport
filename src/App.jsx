import React from 'react';
import Header from './header/Header';
import store from './store';
import { Provider } from 'react-redux';
import SearchSection from './searching-section/searchSection';
import MainBody from './main/MainBody';
import FooterElem from './footer/Footer.jsx';
import './styles.scss';

const App = () => {
	return (
		<main>
			<Provider store={store}>
				<Header />
				<SearchSection />
				<MainBody />
			</Provider>
			<FooterElem />
		</main>
	);
};

export default App;
