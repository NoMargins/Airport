import React from 'react';

const MenuItem = ({ title }) => {
	return (
		<li className='header_content-list__menu-item'>
			<button className='header_content-list__menu-item-btn'>{title}</button>
		</li>
	);
};

export default MenuItem;
