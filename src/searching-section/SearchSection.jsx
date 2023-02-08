import React from 'react';
import ArrivalsJet from './svg/ArrivalsJet.jsx';
import DeparturesJet from './svg/DeparturesJet.jsx';
import SearchingGlass from './svg/SearchingGlass.jsx';
import backgroundImg from './background.jpg';
import './searchSection.scss';

class SearchSection extends React.Component {
	state = {
		inputValue: '',
	};

	render() {
		return (
			<section
				className='searching'
				style={{
					backgroundImage: `url(${backgroundImg}) no-repeat center bottom`,
					backgroundSize: 'cover',
				}}
			>
				<div className='searching_container'>
					<h2>Flight search</h2>
					<div className='searching_textfield'>
						<form className='searching_form'>
							<label>
								<SearchingGlass />
								<input
									type='text'
									className='searching_form__input'
									name='searching-field'
									placeholder='Airline, destination or fligth #'
									value={this.state.inputValue}
									onChange={(e) =>
										this.setState({
											inputValue: e.target.value,
										})
									}
								/>
							</label>
							<button className='searching_form__btn' disabled>
								Search
							</button>
						</form>
					</div>
					<div className='searching_flights'>
						<div id='departures' className='searching_flights__left-btn btn'>
							<DeparturesJet />
							<p>All Departures</p>
						</div>
						<div id='arrivals' className='searching_flights__right-btn btn'>
							<p>All Arrivals</p>
							<ArrivalsJet />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default SearchSection;
