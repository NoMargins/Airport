import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'class-names';
import moment from 'moment';

const ResultItem = ({ flightsList, type }) => {
	const {
		id,
		terminal,
		flightNo,
		airlineLogo,
		airlineName,
		sheduled,
		timeFact,
		destination,
	} = flightsList;

	const terminalStyles = classNames([
		'terminal',
		{
			green: terminal === 'A',
			blue: terminal !== 'A',
		},
	]);

	const statusText = type === 'arrival' ? 'Landed ' : 'Departed at ';
	return (
		<tr>
			<td>
				<div className={terminalStyles}>{terminal}</div>
			</td>
			<td>
				<span className='local-time'>
					{moment(new Date(sheduled)).format('HH:mm')}
				</span>
			</td>
			<td className='destination'>
				<span>{destination}</span>
			</td>
			<td className='status'>
				{statusText + moment(new Date(timeFact)).format('HH:mm')}
			</td>
			<td className='airline'>
				<div className='logo'>
					<img alt='logo' src={airlineLogo} />
				</div>
				<div className='airline-name'>{airlineName}</div>
			</td>
			<td className='flight'>
				<span>{flightNo}</span>
			</td>
			<td className='details'>
				<Link to={`./details/:${id}`} state={{ flightsList, type }}>
					<span>Details</span>
				</Link>
			</td>
		</tr>
	);
};

export default ResultItem;

// <Link to={`details/`} state={{ flightsList }}>
