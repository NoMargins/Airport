import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import moment from 'moment';
import CirclePriorityLine from './CirclePriority';
import CircleTaxi from './CircleTaxi';
import './details.scss';

const FlightDetails = () => {
	// let { state } = useLocation();
	// const {
	// 	flightsList: {
	// 		terminal,
	// 		flightNo,
	// 		airlineLogo,
	// 		airlineName,
	// 		sheduled,
	// 		timeFact,
	// 		destination,
	// 	},
	// } = state;
	const terminal = 'A';
	const flightNo = 'D2233';
	const sheduled = new Date();
	const timeFact = new Date().setMinutes(new Date().getMinutes() + 10);
	const destination = 'Zaporizzhia';

	const departedTime = moment(timeFact).format('HH:mm, DD.MM.YY');
	const sheduleDate = moment(sheduled).format('DD-MM-YYYY');
	const sheduleTime = moment(sheduled).format('HH:mm');
	const factTime = moment(timeFact).format('HH:mm');

	return (
		<section className='flight-details' style={{ marginTop: '10vh' }}>
			<div className='flight-info-header'>
				<div className='container'>
					<Link to='..' style={{ textDecoration: 'none' }}>
						<div className='return-btn' style={{ backgroundColor: '#fff' }}>
							Back
						</div>
					</Link>
					<div style={{ marginTop: '20px' }}>
						<b>{flightNo}</b> flies from
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							marginBottom: '20px',
						}}
					>
						<div className='city-name'>{destination}</div>
						<div className='city-name_img'></div>
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
							Landed {departedTime}
						</div>
						<div
							style={{
								fontWeight: 700,
								fontSize: '35px',
								marginBottom: '20px',
							}}
						>
							Baggage claim D1
						</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='steps-for-departure'>
					<div className='steps-for-departure_container'>
						<div className='one-section first green all-width'>
							<div className='first-part'>
								<div className='green-circle'></div>
							</div>
							<div className='second-part'>
								<div className='title big-title'>Comfortable arrival</div>
								<div className='subsection terminal'>
									<div className='subsection-image'></div>
									<div className='container'>
										<div className='title'>Terminal B</div>
										<div className='description'>
											Speed, comfort, confidentiality. VIP Approach
										</div>
										<button className='subsection-btn'>Book now</button>
									</div>
								</div>
							</div>
							<div className='third-part'></div>
						</div>
						<div className='one-section second all-width'>
							<div className='first-part'>
								<div className='blue-circle'></div>

								<div
									style={{
										fontSize: '24px',
										fontWeight: 700,
										color: '#2f2f2f',
									}}
								>
									~ {sheduleTime}
								</div>
							</div>
							<div className='second-part'>
								<div className='title'>Arrival</div>
								<div>Plane arrivas in Kyiv at local time: {sheduleTime}</div>
							</div>
							<div
								className='third-part'
								style={{ backgroundColor: '#e7efec', borderRadius: '30% 0 0' }}
							></div>
						</div>
						<div className='one-section third all-width'>
							<div className='first-part'>
								<div className='text'>Time saver</div>
								<div className='green-circle'></div>
							</div>
							<div
								className='second-part'
								style={{ borderBottom: 'none', position: 'relative' }}
							>
								<CirclePriorityLine />
							</div>
							<div
								className='third-part'
								style={{
									backgroundColor: '#e7efec',
									borderRadius: '20% 0 0',
									marginTop: '-150px',
								}}
							>
								<div className='subsection'>
									<div className='subsection-image'></div>
									<div className='container'>
										<div className='title'>Priority Line</div>
										<div className='description'>
											For those running late or hating lines.
										</div>
										<button className='subsection-btn'>Book now</button>
									</div>
								</div>
							</div>
						</div>
						<div className='one-section fourth all-width'>
							<div className='first-part'>
								<div className='blue-circle'></div>
							</div>
							<div className='second-part'>
								<div className='title'>Your baggage</div>
								<span>
									Your luggage will be ready to pick up in the D1 baggage claim
									area within 20 minutes upon arrival.
								</span>
							</div>
							<div
								className='third-part'
								style={{ backgroundColor: '#e7efec' }}
							></div>
						</div>
						<div className='one-section fifth all-width'>
							<div className='first-part'>
								<div className='text'>Time saver</div>
								<div className='green-circle'></div>
							</div>
							<div className='second-part' style={{ position: 'relative' }}>
								<CircleTaxi />
							</div>
							<div className='third-part'>
								<div className='subsection'>
									<div className='subsection-image'></div>
									<div className='container'>
										<div className='title'>Taxi from airport</div>
										<div className='description'>Fast and conventient </div>
										<button className='subsection-btn'>More</button>
									</div>
								</div>
							</div>
						</div>

						<div className='one-section sixth all-width'>
							<div className='first-part'>
								<div className='blue-circle'></div>
							</div>
							<div className='second-part' style={{ borderBottom: 'none' }}>
								<div className='title'>Exit the airport</div>
								<div className='text'>Welcome to Kyiv!</div>
								<div className='text'>Public transportation</div>
								<div className='text'>How to leave the airport</div>
							</div>
							<div
								className='third-part'
								style={{ backgroundColor: '#e7efec' }}
							></div>
						</div>
						<div className='one-section seventh all-width'>
							<div className='first-part'></div>
							<div className='second-part'>
								<div className='title'>{destination} - Kyiv(IEV)</div>
								<div className='second-part_btn'>Landed {factTime}</div>
								<div className='second-part_note'>
									*Note: waiting time may vary. Please chack regularly this page
									or information display at the airport.
								</div>
							</div>
							<div className='third-part'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FlightDetails;
