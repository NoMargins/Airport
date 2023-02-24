import React from 'react';
import PropTypes from 'prop-types';
import CirclePriorityLine from './circles/CirclePriority';
import CircleTaxi from './circles/CircleTaxi';
import vipImg from './img/2.jpg';
import piorityLineImg from './img/3.svg';
import taxiImg from './img/4.jpg';
import './arrival-details.scss';

const ArrivalDetails = ({ destination, sheduleTime, factTime, shortId }) => {
	return (
		<div className='container arrival-container'>
			<div className='steps-for-arrival'>
				<div className='steps-for-departure_container'>
					<div className='one-section first green all-width'>
						<div className='first-part'>
							<div className='green-circle'></div>
						</div>
						<div className='second-part'>
							<div className='title big-title'>Comfortable arrival</div>
							<div className='subsection terminal'>
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
							<div className='subsection prior-line'>
								<div
									className='subsection-image'
									style={{
										background: `url(${piorityLineImg})`,
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
							<div className='subsection taxi'>
								<div
									className='subsection-image'
									style={{
										background: `url(${taxiImg})`,
										height: '120px',
										overflow: 'hidden',
										backgroundSize: 'cover',
										backgroundRepeat: 'no-repeat',
										backgroundPosition: 'left',
									}}
								></div>
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
							<div className='title'>
								{destination}({shortId}) - Kyiv(IEV)
							</div>
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
	);
};

ArrivalDetails.propTypes = {
	destination: PropTypes.string.isRequired,
	sheduleTime: PropTypes.string.isRequired,
	factTime: PropTypes.string.isRequired,
	shortId: PropTypes.string.isRequired,
};

export default ArrivalDetails;
