import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../imgs/background.jpg';
import SearchForm from '../../repeated_components/SearchForm.jsx';
import SearchDirections from '../../repeated_components/SearchDirections.jsx';
import './searchSection.scss';

const SearchSection = () => {
	return (
		<section
			className='searching'
			style={{
				background: `url(${backgroundImg}) no-repeat center bottom`,
				backgroundSize: 'cover',
			}}
		>
			<div className='searching_container'>
				<h2>Flight search</h2>
				<SearchForm />

					<div className='searching_flights'>
						<SearchDirections addText='All ' />
					</div>
			</div>
		</section>
	);
};

export default SearchSection;
