import React from 'react';
import { connect } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import ArrivalsJet from './svg/ArrivalsJet.jsx';
import * as searchActions from '../flights/flight-results/utilis/search.actions';
import DeparturesJet from './svg/DeparturesJet.jsx';

const SearchDirection = ({ fetchFlightsList, setDirection, addText }) => {
	const handleClick = (direction) => {
		setDirection(direction);
		fetchFlightsList(direction);
	};

	return (
		<>
			<div
				className='left-btn btn'
				id='departures'
				onClick={() => {
					handleClick('departure');
				}}
			>
				<DeparturesJet />
				<p>{addText + 'Departures'} </p>
			</div>
			<div
				className='right-btn btn'
				id='arrivals'
				onClick={() => {
					handleClick('arrival');
				}}
			>
				<p>{addText + 'Arrivals'}</p>
				<ArrivalsJet />
			</div>
		</>
	);
};

const mapDispatch = {
	fetchFlightsList: searchActions.fetchFlightsList,
	setDirection: searchActions.setSearchDirection,
};

export default connect(null, mapDispatch)(SearchDirection);
