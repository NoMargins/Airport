import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import classNames from 'class-names';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import CovidTesting from './CovidTesting';
import FlightsResult from './flight-results/FlightsResult';
import {
	setSearchDirection,
	fetchAction,
	setDate,
} from './flight-results/utilis/search.actions';
import DeparturesJet from '../repeated_components/svg/DeparturesJet';
import ArrivalsJet from '../repeated_components/svg/ArrivalsJet';
import {
	errorSelector,
	flightsListSelector,
	isPendingSelector,
	searchDirectionSelector,
	dateSelector,
} from './flight-results/utilis/search.selectors';
import './flightsInfo.scss';
import SearchForm from '../repeated_components/SearchForm';
// import SearchDirections from '../repeated_components/SearchDirections';

const FlightInfo = ({
	flightsList,
	searchDirection,
	setDirection,
	fetchAction,
	isPending,
	setDate,
	searchDate,
}) => {
	const userDate = moment(searchDate).format('DD/MM/YY');
	const thisDate = moment(new Date()).format('DD/MM');
	const yestDate = moment(new Date().setDate(new Date().getDate() - 1)).format(
		'DD/MM'
	);
	const tomorrowDate = moment(
		new Date().setDate(new Date().getDate() + 1)
	).format('DD/MM');
	const thisDateFull = new Date();
	const tomorrowDateFull = new Date().setDate(new Date().getDate() + 1);
	const yestDateFull = new Date().setDate(new Date().getDate() - 1);

	const noFlights = flightsList.length < 1 && isPending === false;

	const handleClick = (direction) => {
		setDirection(direction);
		fetchAction();
	};
	const handleDateChangeClick = (date) => {
		setDate(date);
		fetchAction();
	};
	const leftBtnStyles = classNames([
		'btn',
		'left-btn',
		{
			'active-btn': searchDirection === 'departure',
		},
	]);

	const rightBtnStyles = classNames([
		'btn',
		'right-btn',
		{
			'active-btn': searchDirection === 'arrival',
		},
	]);

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
							<div
								className={leftBtnStyles}
								id='departures'
								onClick={() => {
									handleClick('departure');
								}}
							>
								<DeparturesJet />
								<p>Departures</p>
							</div>
							<div
								className={rightBtnStyles}
								id='arrivals'
								onClick={() => {
									handleClick('arrival');
								}}
							>
								<ArrivalsJet />
								<p>Arrivals</p>
							</div>
						</div>
					</div>
					<div className='flight-info_board__dates'>
						<div className='calendar dates-nav'>
							<span className='calendar-date'>{userDate}</span>
							<div className='square'>
								<form>
									<input
										type='date'
										onChange={(e) => setDate(e.target.value)}
									/>
								</form>
								<FontAwesomeIcon className='icon' icon={regular('calendar')} />
							</div>
						</div>
						<div className='dates-nav closest'>
							<span className='dates-nav_yesterday__date calendar-date'>
								{yestDate}
							</span>
							<span
								className='dates-nav_yesterday__title calendar-title'
								onClick={() => handleDateChangeClick(yestDateFull)}
							>
								YESTERDAY
							</span>
						</div>
						<div className='dates-nav closest'>
							<span className='calendar-date'>{thisDate}</span>
							<span
								className='calendar-title'
								onClick={() => handleDateChangeClick(thisDateFull)}
							>
								TODAY
							</span>
						</div>
						<div className='dates-nav closest'>
							<span className='calendar-date'>{tomorrowDate}</span>
							<span
								className='calendar-title'
								onClick={() => handleDateChangeClick(tomorrowDateFull)}
							>
								TOMORROW
							</span>
						</div>
					</div>
					<div className='flight-info_board__results'>
						{flightsList.length > 0 && (
							<FlightsResult list={flightsList} type={searchDirection} />
						)}
						{isPending && <span className='no-results'>Loading...</span>}

						{noFlights && <span className='no-results'>No Flights</span>}
					</div>
				</div>
				<CovidTesting />
			</div>
		</section>
	);
};

FlightInfo.propTypes = {
	flightsList: PropTypes.array,
	searchDirection: PropTypes.string,
	setDirection: PropTypes.func,
	fetchAction: PropTypes.func,
	isPending: PropTypes.bool,
	setDate: PropTypes.func,
	searchDate: PropTypes.object,
};

const mapState = (state) => {
	return {
		flightsList: flightsListSelector(state),
		searchDirection: searchDirectionSelector(state),
		isPending: isPendingSelector(state),
		error: errorSelector(state),
		searchDate: dateSelector(state),
	};
};

const mapDispatch = {
	setDirection: setSearchDirection,
	fetchAction,
	setDate,
};

export default connect(mapState, mapDispatch)(FlightInfo);
