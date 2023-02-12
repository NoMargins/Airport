import React from 'react';
import covidImg from './imgs/covid-btn.png';


const CovidTesting = () => {
	return (
		<div className='covid'>
			<h2>COVID-19 TESTING AT THE "KYIV" INTERNATIONAL AIRPORT</h2>
			<span>24/7 FOR EVERYONE INTERESTED</span>
			<img alt='covid pic' src={covidImg} />
		</div>
	);
};

export default CovidTesting;
