import React, { useState } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import CovidTesting from './CovidTesting';
import FlightsResult from './flight-results/FlightsResult';
import { fetchFlightsList } from './flight-results/utilis/search.actions';
import {
	flightsListSelector,
	searchDirectionSelector,
} from './flight-results/utilis/search.selectors';
import './flightsInfo.scss';
import SearchForm from '../repeated_components/SearchForm';
import SearchDirections from '../repeated_components/SearchDirections';

const FlightInfo = ({ flightsList, searchDirection }) => {
	const thisDate = moment(new Date()).format('DD/MM');
	const yestDate = moment(new Date().setDate(new Date().getDate() - 1)).format(
		'DD/MM'
	);
	const tomorrowDate = moment(
		new Date().setDate(new Date().getDate() + 1)
	).format('DD/MM');

	const noFlights = searchDirection === null;
	const loadingStatus = searchDirection != null && flightsList.length === 0;

	return (
		<section className='flight-info'>
			<h2 className='title'>Search flight</h2>
			<div className='flight-info_container'>
				<div className='flight-info_input'>
					<SearchForm />
				</div>
				<div className='flight-info_board'>
					<div className='flight-info_board__header'>
						<div className='searching-flights'>
							<SearchDirections addText='' />
						</div>
					</div>
					<div className='flight-info_board__dates'>
						<div className='calendar dates-nav'>
							<span className='calendar-date'>{thisDate}</span>
							<div className='square'>
								<FontAwesomeIcon className='icon' icon={regular('calendar')} />
							</div>
						</div>
						<div className='dates-nav closest'>
							<span className='dates-nav_yesterday__date calendar-date'>
								{yestDate}
							</span>
							<span className='dates-nav_yesterday__title calendar-title'>
								YESTERDAY
							</span>
						</div>
						<div className='dates-nav today closest'>
							<span className='calendar-date'>{thisDate}</span>
							<span className='calendar-title '>TODAY</span>
						</div>
						<div className='dates-nav closest'>
							<span className='calendar-date'>{tomorrowDate}</span>
							<span className='calendar-title'>TOMORROW</span>
						</div>
					</div>
					<div className='flight-info_board__results'>
						{flightsList.length > 0 && (
							<FlightsResult list={flightsList} type={searchDirection} />
						)}
						{loadingStatus && <span className='no-results'>Loading...</span>}

						{noFlights && <span className='no-results'>No Flight</span>}
					</div>
				</div>
				<CovidTesting />
			</div>
		</section>
	);
};

const mapState = (state) => {
	return {
		flightsList: flightsListSelector(state),
		searchDirection: searchDirectionSelector(state),
	};
};

const mapDispatch = {
	fetchFlightsList: fetchFlightsList,
};

export default connect(mapState, mapDispatch)(FlightInfo);
