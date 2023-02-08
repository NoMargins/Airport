import React from 'react';
import './info-section.scss';

const InfoSection = () => {
	return (
		<div className='info-section'>
			<span>Dear passangers,</span>
			<p>
				Due to COVID-19 pandemic additional rules are in effect to ensure
				security for you and others.
			</p>
			<button>Find out more</button>
		</div>
	);
};

export default InfoSection;
