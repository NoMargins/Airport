import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
			<Link to='/searching' style={{ textDecoration: 'none' }}>
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
			</Link>
			<Link to='/searching' style={{ textDecoration: 'none' }}>
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
			</Link>
		</>
	);
};

SearchDirection.propTypes = {
	fetchAction: PropTypes.func,
	setDirection: PropTypes.func,
	addText: PropTypes.string,
};

const mapDispatch = {
	setDirection: searchActions.setSearchDirection,
	fetchAction: searchActions.fetchAction,
};

export default connect(null, mapDispatch)(SearchDirection);
