import React from 'react';
import SearchingForm from '../searching-section/SearchingForm';

const FlightInfo = () => {
	return (
		<section className='flight-info'>
			<h2>Search flight</h2>
			<div className='flight-info_container'>
				<SearchingForm />
			</div>
		</section>
	);
};

export default FlightInfo;
