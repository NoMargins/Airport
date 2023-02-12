import React from 'react';
import { useLocation } from 'react-router-dom';

const FlightDetails = () => {
	let { state } = useLocation();
	const { details } = state;
	return (
		<section className='flight-details' style={{ marginTop: '10vh' }}>
			<div className='flight-info-header'>
				<div className='container'>
					<div className='row no-gutters'>
						<ul className='breadcrumbs'>
							<li>Back</li>
							<li>
								<img src='/images/FlightAware.png' alt='Logo FlightAware' />
							</li>
						</ul>
						<div className='flight-info-details'>
							<div className='row no-gutters'>
								<div className='col-md-9'>
									<div className='flight-info'>
										<b data-v-b70db748=''>7B321</b>
										<span data-v-b70db748=''>flies in</span>
									</div>
									<div className='city-name'>
										<span data-v-b70db748=''>Tbilisi</span>
										<img src='/images/FlightAware.png' alt='Logo FlightAware' />
									</div>
									<div className='title'>Flight information:</div>
									<div className='details'>
										<ul data-v-b70db748=''>
											<li data-v-b70db748=''>
												<p className='label'>Date</p>
												<p className='value'>
													<b data-v-b70db748=''>11.01</b>
												</p>
											</li>
											<li data-v-b70db748=''>
												<p className='label'>Time</p>
												<p className='value'>
													<b data-v-b70db748=''>18:00</b>
												</p>
											</li>
											<li data-v-b70db748=''>
												<p className='label'>Terminal</p>
												<p className='value'>
													<b data-v-b70db748=''>A</b>
												</p>
											</li>
											<li data-v-b70db748=''>
												<p className='label'>Flight</p>
												<p className='value'>
													<b data-v-b70db748=''>7B321</b>
												</p>
											</li>
											<li data-v-b70db748=''>
												<p className='label'>Stand</p>
												<p className='value'>
													<b data-v-b70db748=''>8</b>
												</p>
											</li>
											<li data-v-b70db748=''>
												<p className='label'>Gate</p>
												<p className='value'>
													<b data-v-b70db748=''>A4</b>
												</p>
											</li>
										</ul>
									</div>
									<div className='details-status'>
										<div data-v-b70db748=''>Departed at 18:04, 11.01.22</div>
									</div>
								</div>
								<div className='col-md-3'>
									<div className='new-banner'>
										<img src='/images/main/32.jpg' alt='img' />
										<div className='content'>
											<span className='title'>Airline tickets</span>
											<span className='desc'>Purchase tickets online</span>
										</div>
										Search
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-circles'>
				<div className='container'>
					<div className='steps-for-departure'>
						<div className='steps-for-departure-container'>
							<div className='one-section green all-width'>
								<div className='description'>Before departure</div>
								<div className='left-info-block'>
									<div className='one-content'>
										<div className='small-title'>Steps before departure</div>
										<div className='big-title'>First of all</div>
										<div className='row'>
											<div className='info-square border-right desktop-only'>
												<div className='content-bl'>
													<div
														className='img'
														style={{
															backgroundImage: 'url(/images/info-square/1.svg)',
														}}
													></div>
													<div className='name'>Priority Line</div>
													<div className='description'>
														Skip the line before your flight.
													</div>
													BOOK NOW
												</div>
											</div>
											<div className='info-square border-center desktop-only hide-tablet'>
												<div className='content-bl'>
													<div
														className='img'
														style={{
															backgroundImage:
																'url(/images/info-square/covid.jpeg)',
														}}
													></div>
													<div className='name'>COVID-19 testing</div>
													<div className='description'>
														At the “Kyiv” airport for everyone, 24/7
													</div>
													MORE
												</div>
											</div>
											<div className='info-square border-left small'>
												<div className='content-bl'>
													<div
														className='img'
														style={{
															backgroundImage: 'url(/images/info-square/3.jpg)',
														}}
													></div>
													<div className='name'>Terminal B</div>
													<div className='description'>
														Speed, comfort, confidentiality.VIP Approach.
													</div>
													BOOK NOW
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='one-section'>
								<div className='description time'>
									~ 15:30
									<div className='small-descr'>
										Time is approximate, for your information only
									</div>
								</div>
								<div className='left-info-block'>
									<div className='one-content'>
										<h3 className='title'>The beginning</h3>
										<div className='description'>
											Your flight departures from terminal A.
										</div>
										<div className='description'>
											Please check the information on your boarding pass. We
											recommend arriving{' '}
											<b> at least 2.5 hour(s) before your flight.</b>
										</div>
									</div>
								</div>
							</div>
							<div className='one-section empty-left'>
								<div className='description'>Time saver</div>
								<div className='left-info-block'>
									<div className='circle parking'>P</div>
								</div>
								<div className='right-info-block'>
									<div className='one-content'>
										<div className='info-square border-left background-right'>
											<div className='content-bl'>
												<div
													className='img'
													style={{
														backgroundImage: 'url(./images/info-square/4.jpg)',
													}}
												></div>
												<div className='name'>Long term parking</div>
												<div className='description'>
													You can safely leave your vehicle parked at IEV.
												</div>
												More info
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='one-section'>
								<div className='description'></div>
								<div className='left-info-block'>
									<div className='one-content'>
										<h3 className='title'>Departure registration</h3>
										<div className='description'>
											<p>
												Registration desk: <b>8</b>
											</p>
											<p>
												Check-in opens 2.5 hours prior to scheduled departure
											</p>
											Baggage regulations
										</div>
									</div>
								</div>
							</div>
							<div className='one-section'>
								<div className='description'></div>
								<div className='left-info-block'>
									<div className='one-content'>
										<h3 className='title'>Aviation security control</h3>
										<div className='description'>
											<p>
												Only passengers who have completed their flight
												registration are allowed to go through security check.
											</p>
											Aviation security
										</div>
									</div>
								</div>
							</div>
							<div className='one-section empty-left'>
								<div className='description'>Time saver</div>
								<div className='left-info-block'>
									<div className='circle'>
										<svg
											width='44px'
											height='44px'
											viewBox='0 0 44 44'
											version='1.1'
										>
											<g
												id='Page-1'
												stroke='none'
												strokeWidth='1'
												fill='none'
												fillRule='evenodd'
											>
												<g id='Group'>
													<g id='1' transform='translate(10.000000, 10.000000)'>
														<path
															d='M4,18 L12.5,12 L4,6 L4,18 Z M13,6 L13,18 L21.5,12 L13,6 Z'
															id='Path_409'
															fill='#FFFFFF'
															fill-rule='nonzero'
														></path>
														<polygon
															id='Path_410'
															points='0 0 24 0 24 24 0 24'
														></polygon>
													</g>
												</g>
											</g>
										</svg>
									</div>
								</div>
								<div className='right-info-block'>
									<div className='one-content'>
										<div className='info-square border-right'>
											<div className='content-bl'>
												<div
													className='img'
													style={{
														backgroundImage:
															'url(./images/info-square/express.svg)',
													}}
												></div>
												<div className='name'>Express Line</div>
												<div className='description'>Express security pass</div>
												Order
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='one-section'>
								<div className='description'></div>
								<div className='left-info-block'>
									<div className='one-content'>
										<h3 className='title'>
											Boarding pass and passport control
										</h3>
										<div className='description'>
											<p>Make sure you have all the required documents</p>
										</div>
									</div>
								</div>
							</div>
							<div className='one-section'>
								<div className='description'></div>
								<div className='left-info-block'>
									<div className='one-content'>
										<h3 className='title'>Enjoy yourself at the airport</h3>
										<div className='description'>
											Relax, it’s time for an adventure!
										</div>
									</div>
								</div>
							</div>
							<div className='one-section empty-left'>
								<div className='description'>Why are not trying?</div>
								<div className='left-info-block'>
									<div className='circle'>
										<svg
											width='44px'
											height='44px'
											viewBox='0 0 44 44'
											version='1.1'
										>
											<g
												id='Page-1'
												stroke='none'
												strokeWidth='1'
												fill='none'
												fillRule='evenodd'
											>
												<g id='Group-2'>
													<g id='2' transform='translate(10.000000, 10.000000)'>
														<path
															d='M11,9 L9,9 L9,2 L7,2 L7,9 L5,9 L5,2 L3,2 L3,9 C3.00476,11.1062685 4.64742086,12.8452987 6.75,12.97 L6.75,22 L9.25,22 L9.25,12.97 C11.3525791,12.8452987 12.99524,11.1062685 13,9 L13,2 L11,2 L11,9 Z M16,6 L16,14 L18.5,14 L18.5,22 L21,22 L21,2 C18.24,2 16,4.24 16,6 Z'
															id='Path_405'
															fill='#FFFFFF'
															fillRule='nonzero'
														></path>
														<polygon
															id='Path_406'
															points='0 0 24 0 24 24 0 24'
														></polygon>
													</g>
												</g>
											</g>
										</svg>
									</div>
								</div>
								<div className='right-info-block'>
									<div className='one-content'>
										<div className='info-square border-left'>
											<div className='content-bl'>
												<div
													className='img'
													style={{
														backgroundImage: 'url(./images/main/24.jpg)',
													}}
												/>
											</div>
											<div className='name'>Business Lounge</div>
											<div className='description'>
												Comfortable lounge to spend time before your flight
											</div>
											Order
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='one-section without-image green'>
							<div className='description'>Don’t miss it!</div>
							<div className='left-info-block'>
								<div className='circle'>
									<svg
										width='44px'
										height='44px'
										viewBox='0 0 44 44'
										version='1.1'
									>
										<g
											id='Page-1'
											stroke='none'
											strokeWidth='1'
											fill='none'
											fillRule='evenodd'
										>
											<g id='3'>
												<g id='Group-3'>
													<polygon
														id='Path_407'
														points='10 10 34 10 34 34 10 34'
													></polygon>
													<path
														d='M27.21,19 L22.83,12.44 C22.6400714,12.1710571 22.3291869,12.013742 22,12.02 C21.6682653,12.0130926 21.355699,12.1750246 21.17,12.45 L16.79,19 L12,19 C11.4477153,19 11,19.4477153 11,20 C10.9985601,20.0915765 11.0120709,20.1827745 11.04,20.27 L13.58,29.54 C13.8182333,30.4034805 14.6042588,31.0011875 15.5,31 L28.5,31 C29.3970504,30.9985325 30.1845393,30.4028156 30.43,29.54 L32.97,20.27 L33,20 C33,19.4477153 32.5522847,19 32,19 L27.21,19 Z M19,19 L22,14.6 L25,19 L19,19 Z M22,27 C20.8954305,27 20,26.1045695 20,25 C20,23.8954305 20.8954305,23 22,23 C23.1045695,23 24,23.8954305 24,25 C23.9967052,26.1032019 23.1032019,26.9967052 22,27 Z'
														id='Path_408'
														fill='#FFFFFF'
														fillRule='nonzero'
													></path>
												</g>
											</g>
										</g>
									</svg>
								</div>
								<div className='one-content'>
									<h3 className='title'>Shopping</h3>
									<div className='description'>
										<p>Enjoy low prices while shopping atourairport.</p>
										Where can I shop?
									</div>
								</div>
							</div>
						</div>
						<div className='one-section'>
							<div className='description time'>
								<span>~17:32</span>
							</div>
							<div className='left-info-block'>
								<div className='one-content'>
									<h3 className='title'>
										Find your boarding gate
										<b>A4</b>
									</h3>
									<div className='description'>
										We recommend being available for boarding at the gate at
										least 45 minutes prior to a scheduled departure. Boarding
										closes 20 minutes before departure.
									</div>
								</div>
							</div>
						</div>
						<div className='one-section'>
							<div className='description time'>18:00</div>
							<div className='left-info-block'>
								<div className='one-content'>
									<h3 className='title'>Departure</h3>
									<div className='description'></div>
								</div>
							</div>
						</div>
					</div>
					<div className='description-info'>
						<div className='flight-route'>
							<b>KYIV (IEV) — Tbilisi (TBS)</b>
						</div>
						<div>
							<div className='status'>Departed at 18:04</div>
						</div>
						<div className='important'>
							*Note: waiting time may vary. Please check regularly this page or
							information display at the airport.
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FlightDetails;
