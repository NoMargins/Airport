import React from 'react';
import Header from './header/Header';
import store from './store';
import { Provider } from 'react-redux';
import './styles.scss';

const App = () => {
	return (
		<main>
			<Provider store={store}>
				<Header />
			</Provider>
		</main>
	);
};

export default App;
