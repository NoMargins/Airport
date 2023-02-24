import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
	searchRequestSelector,
	dateSelector,
	searchDirectionSelector,
} from '../flights/flight-results/utilis/search.selectors';

import {
	setSearchingRequest,
	setDate,
	fetchAction,
	setSearchDirection,
} from '../flights/flight-results/utilis/search.actions';

import SearchingGlass from './svg/SearchingGlass.jsx';

import '../main/main-body-blocks/searchSection.scss';

const SearchForm = ({
	searchRequest,
	setSearchingRequest,
	dateSaved,
	setDirection,
	fetchAction,
	setDate,
}) => {
	const handleClick = () => {
		setDirection('departure');
		fetchAction();
	};

	return (
		<div className='searching_textfield'>
			<form className='searching_form'>
				<div className='image'>
					<SearchingGlass />
				</div>
				<input
					type='text'
					className='searching_form__input'
					name='searching-field'
					placeholder='Airline, destination or fligth #'
					value={searchRequest}
					onChange={(e) => setSearchingRequest(e.target.value)}
					autoComplete='off'
				/>
				<input
					type='date'
					className='searching_form__date'
					value={moment(dateSaved).format('YYYY-MM-DD')}
					onChange={(e) => {
						setDate(e.target.value);
					}}
				/>
				<Link to='/searching' className='searching-btn'>
					<input
						type='button'
						className='searching_form__btn'
						value='Search'
						onClick={handleClick}
					/>
				</Link>
			</form>
		</div>
	);
};

SearchForm.propTypes = {
	searchRequest: PropTypes.string,
	setSearchingRequest: PropTypes.func,
	dateSaved: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.string,
	]),
	setDirection: PropTypes.func,
	fetchAction: PropTypes.func,
	setDate: PropTypes.func,
};

const mapState = (state) => {
	return {
		searchRequest: searchRequestSelector(state),
		dateSaved: dateSelector(state),
		directionSaved: searchDirectionSelector(state),
	};
};
const mapDispatch = {
	setSearchingRequest,
	setDate,
	setDirection: setSearchDirection,
	fetchAction,
};
export default connect(mapState, mapDispatch)(SearchForm);
