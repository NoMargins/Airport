import React from 'react';
import Header from './header/Header';
import store from './store';
import { Provider } from 'react-redux';
import SearchSection from './searching-section/searchSection';
import './styles.scss';

const App = () => {
	return (
		<main>
			<Provider store={store}>
				<Header />
				<SearchSection />
			</Provider>
		</main>
	);
};

export default App;
