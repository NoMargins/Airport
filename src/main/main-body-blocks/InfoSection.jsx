import React from 'react';
import './info-list.scss';

const InfoSection = () => {
	return (
		<div className='info-list'>
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
