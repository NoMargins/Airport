import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import {
	searchRequestSelector,
	dateSelector,
} from '../flights/flight-results/utilis/search.selectors';
import { Link } from 'react-router-dom';
import {
	setSearchingRequest,
	setDate,
} from '../flights/flight-results/utilis/search.actions';
import SearchingGlass from './svg/SearchingGlass.jsx';
import '../main/main-body-blocks/searchSection.scss';

const SearchForm = ({ searchRequest, setSearchingRequest, dateSaved }) => {
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
				/>
				<input
					type='date'
					className='searching_form__date'
					value={moment(dateSaved).format('YYYY-MM-DD')}
					onChange={(e) => setDate(e.target.value)}
				/>
				<Link to='/searching' className='searching-btn'>
					<input type='button' className='searching_form__btn' value='Search' />
				</Link>
			</form>
		</div>
	);
};

const mapState = (state) => {
	return {
		searchRequest: searchRequestSelector(state),
		dateSaved: dateSelector(state),
	};
};
const mapDispatch = {
	setSearchingRequest,
	setDate,
};
export default connect(mapState, mapDispatch)(SearchForm);
