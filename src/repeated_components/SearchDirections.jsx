import React from 'react';
import { connect } from 'react-redux';
import ArrivalsJet from './svg/ArrivalsJet.jsx';
import * as searchActions from '../flights/flight-results/utilis/search.actions';
import DeparturesJet from './svg/DeparturesJet.jsx';

const SearchDirection = ({ fetchAction, setDirection, addText }) => {
	const handleClick = (direction) => {
		setDirection(direction);
		fetchAction();
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
	setDirection: searchActions.setSearchDirection,
	fetchAction: searchActions.fetchAction,
};

export default connect(null, mapDispatch)(SearchDirection);
