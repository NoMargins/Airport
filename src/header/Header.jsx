import React from 'react';
import MenuItem from './MenuItem';
import './header.scss';

const headerItemsList = [
	{ title: 'For passangers', id: 1 },
	{ title: 'IEV Services', id: 2 },
	{ title: 'VIP', id: 3 },
	{ title: 'Corporate', id: 4 },
	{ title: 'Press Room', id: 5 },
	{ title: 'EN', id: 6 },
];

const Header = () => {
	return (
		<section className='header'>
			<img className='header__logo' src='.\img\logo_logo.png' alt='logo'></img>
			<ul className='header_content-list'>
				{headerItemsList.map((el) => {
					return <MenuItem key={el.id} title={el.title} />;
				})}
			</ul>
		</section>
	);
};

export default Header;
