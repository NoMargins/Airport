import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import flightImg from './img/1.png';
import planeImg from './img/plane.jpg';
import ArrivalDetails from './ArrivalDetails';
import DepartureDetails from './DepartureDetails';

import './details.scss';

const FlightDetails = () => {
	let { state } = useLocation();
	const { flightsList, type } = state;
	const { timeFact, sheduled, destination, terminal, flightNo, shortId } =
		flightsList;

	const departedTime = moment(timeFact).format('HH:mm, DD.MM.YY');
	const sheduleDate = moment(sheduled).format('DD-MM-YY');
	const sheduleTime = moment(sheduled).format('HH:mm');
	const factTime = moment(timeFact).format('HH:mm');
	const textDate = moment(timeFact).format('HH:mm, MMM DD, YYYY');

	// const destination = 'Zhytomyr';
	// const sheduleTime = '12:30';
	// const terminal = 'A';
	// const shortId = 'GGF';
	// const factTime = '12:54';
	// const textDate = '12:54, 12 Oct, 2021';
	// const sheduleDate = '12-12-32';
	// const type = 'departure';
	// const flightNo = 'A567';
	// const sheduled = new Date();

	const arrType = type === 'arrival';
	const departType = type === 'departure';

	const fliesFromText = type === 'departure' ? 'to' : 'from';
	const directionText = type === 'departure' ? 'Departed at' : 'Landed at';

	return (
		<section className='flight-details' style={{ marginTop: '10vh' }}>
			<div className='flight-info-header' style={{ position: 'relative' }}>
				<div className='first-col'>
					<div className='container'>
						<Link to='../searching' style={{ textDecoration: 'none' }}>
							<div className='return-btn'>Back</div>
						</Link>
						<div style={{ marginTop: '20px', fontSize: '24px' }}>
							<b>{flightNo}</b> flies {fliesFromText}
						</div>
						<div className='city-name'>
							<div className='city-name_title'>{destination}</div>
							<div className='city-name_img'>
								<img src={flightImg} alt='flight logo' />
							</div>
						</div>

						<div className='title'>Flight information:</div>
						<div className='details'>
							<ul>
								<li>
									<p className='label'>Date</p>
									<p className='value'>
										<b>{sheduleDate}</b>
									</p>
								</li>
								<li>
									<p className='label'>Time</p>
									<p className='value'>
										<b>{sheduleTime}</b>
									</p>
								</li>
								<li>
									<p className='label'>Terminal</p>
									<p className='value'>
										<b>{terminal}</b>
									</p>
								</li>
								<li>
									<p className='label'>Flight</p>
									<p className='value'>
										<b>{flightNo}</b>
									</p>
								</li>
								<li>
									<p className='label'>Stand</p>
									<p className='value'>
										<b>8</b>
									</p>
								</li>
								<li>
									<p className='label'>Gate</p>
									<p className='value'>
										<b>A4</b>
									</p>
								</li>
							</ul>
						</div>
						<div className='details-status'>
							<div
								style={{
									fontWeight: 700,
									fontSize: '35px',
									marginBottom: '20px',
								}}
							>
								{directionText} {textDate}
							</div>
						</div>
					</div>
				</div>
				<div className='second-col one-section'>
					<div className='buy-tickets subsection'>
						<div
							className='buy-tickets_image subsection-image'
							style={{
								background: `url(${planeImg})`,
							}}
						></div>
						<div className='buy-tickets_body container'>
							<div className='title'>Airline tickets</div>
							<div className='description'>Purchase tickets online</div>
							<Link to='..' style={{ textDecoration: 'none' }}>
								<button className='subsection-btn'>Search</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{arrType && (
				<ArrivalDetails
					destination={destination}
					sheduleTime={sheduleTime}
					factTime={factTime}
					shortId={shortId}
				/>
			)}
			{departType && (
				<DepartureDetails
					destination={destination}
					sheduled={sheduled}
					sheduleTime={sheduleTime}
					terminal={terminal}
					shortId={shortId}
				/>
			)}
		</section>
	);
};

FlightDetails.propTypes = {
	flightsList: PropTypes.object,
	type: PropTypes.string,
	timeFact: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string,
		PropTypes.number,
	]),
	sheduled: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string,
		PropTypes.number,
	]),
	destination: PropTypes.string,
	terminal: PropTypes.string,
	flightNo: PropTypes.string,
	shortId: PropTypes.string,
};

export default FlightDetails;
