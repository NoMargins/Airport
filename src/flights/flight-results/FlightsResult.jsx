import React from 'react';
import PropTypes from 'prop-types';
import './flight-results.scss';
import ResultItem from './ResIulttem';

const FlightsResult = ({ list, type }) => {
	return (
		<table className='found-results'>
			<thead>
				<tr>
					<th>Terminal</th>
					<th>Local time</th>
					<th>Destination</th>
					<th>Status</th>
					<th>Airline</th>
					<th>Flight</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{list.map((el) => (
					<ResultItem key={el.id} flightsList={el} type={type} />
				))}
			</tbody>
		</table>
	);
};

FlightsResult.propTypes = {
	list: PropTypes.array,
	type: PropTypes.string,
};

export default FlightsResult;
