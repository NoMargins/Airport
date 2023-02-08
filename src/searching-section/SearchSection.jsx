import React from 'react';
import ArrivalsJet from './svg/ArrivalsJet.jsx';
import DeparturesJet from './svg/DeparturesJet.jsx';
import backgroundImg from './background.jpg';
import SearchingForm from './SearchingForm.jsx';
import './searchSection.scss';

const SearchSection = () => {
	return (
		<section
			className='searching'
			style={{
				backgroundImage: `url(${backgroundImg}) no-repeat center bottom`,
				backgroundSize: 'cover',
			}}
		>
			<div className='searching_container'>
				<h2>Flight search</h2>
				<SearchingForm />
				<div className='searching_flights'>
					<div id='departures' className='searching_flights__left-btn btn'>
						<DeparturesJet />
						<p>All Departures</p>
					</div>
					<div id='arrivals' className='searching_flights__right-btn btn'>
						<p>All Arrivals</p>
						<ArrivalsJet />
					</div>
				</div>
			</div>
		</section>
	);
};

export default SearchSection;
