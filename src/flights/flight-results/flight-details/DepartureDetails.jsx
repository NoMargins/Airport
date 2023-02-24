import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import priorityImg from './img/priority.svg';
import covidImg from './img/covid.jpeg';
import loungeImg from './img/lounge.jpg';
import expresImg from './img/express.svg';
import vipImg from './img/2.jpg';
import parkingImg from './img/parking.jpg';
import CircleLounge from './circles/CircleLounge';
import CirclePriorityLine from './circles/CirclePriority';
import './departure-details.scss';

// flightsList, sheduleDate, sheduleTime;
const DepartureDetails = ({
	destination,
	sheduled,
	sheduleTime,
	terminal,
	shortId,
}) => {
	const approximateTime = moment(
		new Date(sheduled).setMinutes(new Date(sheduled).getMinutes() - 15)
	).format('HH:mm');

	const getAirportTime = moment(
		new Date(sheduled).setHours(new Date(sheduled).getHours() - 2)
	).format('HH:mm');

	return (
		<div className='container departure-container'>
			<div className='bg-circles' style={{ position: 'relative' }}>
				<div className='steps-for-departure'>
					<div className='steps-for-departure_container'>
						<div className='one-section first green all-width'>
							<div className='first-part'>
								<div className='green-circle'></div>
								<div
									className='text'
									style={{ fontSize: '24px', color: '#000' }}
								>
									{getAirportTime}
								</div>
							</div>
							<div className='second-part'>
								<div className='small-title'>Steps before departure</div>
								<div className='big-title'>First of all</div>
								<div
									className='subsections'
									style={{ display: 'flex', flexDirection: 'row' }}
								>
									<div className='subsection steps first'>
										<div
											className='subsection-image'
											style={{
												background: `url(${priorityImg})`,
												height: '120px',
												overflow: 'hidden',
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												backgroundPosition: 'left',
											}}
										></div>
										<div className='container'>
											<div className='title'>Priority Line</div>
											<div className='description'>
												Skip the line before your flight
											</div>
											<button className='subsection-btn'>Book now</button>
										</div>
									</div>
									<div className='subsection steps second'>
										<div
											className='subsection-image'
											style={{
												background: `url(${covidImg})`,
												height: '120px',
												overflow: 'hidden',
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												backgroundPosition: 'left',
											}}
										></div>
										<div className='container'>
											<div className='title'>COVID-19 testing</div>
											<div className='description'>
												At the “Kyiv” airport for everyone, 24/7
											</div>
											<button className='subsection-btn'>MORE</button>
										</div>
									</div>
								</div>
							</div>
							<div className='third-part'>
								<div className='subsection steps third'>
									<div
										className='subsection-image'
										style={{
											background: `url(${vipImg})`,
											height: '120px',
											overflow: 'hidden',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											backgroundPosition: 'left',
										}}
									></div>
									<div className='container'>
										<div className='title'>Terminal B</div>
										<div className='description'>
											Speed, comfort, confidentiality. VIP Approach
										</div>
										<button className='subsection-btn'>Book now</button>
									</div>
								</div>
							</div>
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
								<div style={{ fontSize: '12px' }}>
									time is approximate, for your information only
								</div>
							</div>
							<div className='second-part'>
								<div className='second-part-border'>
									<div className='title'>The beginning</div>
									<div className='body-description'>
										<p>Your flight departures from terminal {terminal}.</p>
										<p>Please check the information on your boarding pass.</p>
										<p>
											We recommend arriving
											<b> at least 2 hour(s) before your flight.</b>
										</p>
									</div>
								</div>
							</div>
							<div className='third-part'></div>
						</div>
						<div className='one-section third all-width'>
							<div className='first-part'>
								<div className='text'>Time saver</div>
								<div className='green-circle'></div>
							</div>
							<div className='second-part' style={{ position: 'relative' }}>
								<div className='dark-blue-circle'>P</div>
							</div>
							<div
								className='third-part'
								style={{
									backgroundColor: '#e7efec',
									borderRadius: '160px 0 0',
								}}
							>
								<div
									className='subsection'
									style={{ borderRadius: '80px 0 20px 50px' }}
								>
									<div
										className='subsection-image'
										style={{
											background: `url(${parkingImg})`,
											height: '120px',
											overflow: 'hidden',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											borderRadius: '80px 0 0 40px',
										}}
									></div>
									<div className='container'>
										<div className='title'>Long term parking</div>
										<div className='body-description'>
											You can safely leave your vehicle parked at IEV.
										</div>
										<button className='subsection-btn'>More info</button>
									</div>
								</div>
							</div>
						</div>
						<div className='one-section fourth all-width'>
							<div className='first-part'>
								<div className='blue-circle'></div>
							</div>
							<div className='second-part'>
								<div className='title'>Departure registration</div>
								<div className='body-description'>
									<p>
										Registration desk: <b>23</b>.
									</p>
									<p> Check-in opens 2 hours prior to scheduled departure</p>
								</div>
							</div>
							<div className='third-part'></div>
						</div>
						<div className='one-section fifth all-width'>
							<div className='first-part'>
								<div className='text'></div>
								<div className='blue-circle'></div>
							</div>
							<div className='second-part'>
								<div className='title'>Aviation security control</div>
								<div className='body-description'>
									<span>
										Only passengers who have completed their flight registration
										are allowed to go through security check.
									</span>
								</div>
							</div>
							<div className='third-part'></div>
						</div>
						<div className='one-section sixth all-width'>
							<div className='first-part'>
								<div className='text'>Time saver</div>
								<div className='green-circle'></div>
							</div>
							<div className='second-part' style={{ position: 'relative' }}>
								<CirclePriorityLine />
							</div>
							<div className='third-part'>
								<div
									className='subsection'
									style={{ borderRadius: '0 80px 20px 50px' }}
								>
									<div
										className='subsection-image'
										style={{
											background: `url(${expresImg})`,
											height: '120px',
											overflow: 'hidden',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											backgroundPosition: 'right',
											borderRadius: '0 80px 40px 0',
										}}
									></div>
									<div className='container'>
										<div className='title'>Express Line</div>
										<div className='description'>Express security pass</div>
										<button className='subsection-btn'>Order</button>
									</div>
								</div>
							</div>
						</div>
						<div className='one-section seventh all-width'>
							<div className='first-part'>
								<div className='blue-circle'></div>
							</div>
							<div className='second-part'>
								<div className='title'>Boarding pass and passport control</div>
								<div className='body-description'>
									<span>Make sure you have all the required documents</span>
								</div>
							</div>
							<div className='third-part'></div>
						</div>
						<div className='one-section eighth all-width'>
							<div className='first-part'>
								<div className='text'></div>
								<div className='blue-circle'></div>
							</div>
							<div className='second-part'>
								<div className='title'>Enjoy yourself at the airport</div>
								<div className='body-description'>
									<span>Relax, it’s time for an adventure!</span>
								</div>
							</div>
							<div className='third-part'></div>
						</div>
						<div className='one-section nineth all-width'>
							<div className='first-part'>
								<div className='text'>Why are not trying?</div>
								<div className='green-circle'></div>
							</div>
							<div className='second-part' style={{ position: 'relative' }}>
								<div className='circle-container' style={{}}>
									<CircleLounge />
								</div>
							</div>
							<div className='third-part'>
								<div className='subsection'>
									<div
										className='subsection-image'
										style={{
											background: `url(${loungeImg})`,
											height: '120px',
											overflow: 'hidden',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat',
											backgroundPosition: 'left',
										}}
									></div>
									<div className='container'>
										<div className='title'>Business Lounge</div>
										<div className='body-description'>
											Comfortable lounge to spend time before your flight
										</div>
										<button className='subsection-btn'>Book now</button>
									</div>
								</div>
							</div>
						</div>
						<div className='one-section tenth all-width'>
							<div className='first-part'>
								<div className='blue-circle'></div>
								<div
									className='text'
									style={{
										fontSize: '24px',
										color: '#000',
										fontWeight: 700,
										marginTop: '0',
									}}
								>
									~{approximateTime}
								</div>
							</div>
							<div className='second-part'>
								<div className='title'>Find your boarding gate A1</div>
								<div className='body-description'>
									<span>
										We recommend being available for boarding at the gate at
										least 45 minutes prior to a scheduled departure. Boarding
										closes 20 minutes before departure.
									</span>
								</div>
							</div>
							<div className='third-part'></div>
						</div>

						<div className='one-section eleventh all-width'>
							<div className='first-part'>
								<div
									className='text'
									style={{
										fontSize: '24px',
										color: '#000',
										fontWeight: 700,
										marginTop: 0,
									}}
								>
									{sheduleTime}
								</div>
								<div className='blue-circle'></div>
							</div>
							<div className='second-part' style={{ borderBottom: 'none' }}>
								<div className='title'>Departure</div>
							</div>
							<div className='third-part'></div>
						</div>
						<div className='one-section twelfth all-width'>
							<div className='first-part'></div>
							<div className='second-part'>
								<div className='title'>
									Kyiv(IEV) - {destination}({shortId})
								</div>
								<div className='second-part_btn'>
									Departing at {sheduleTime}
								</div>
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
		</div>
	);
};

export default DepartureDetails;
