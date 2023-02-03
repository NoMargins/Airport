import React from 'react';
import MenuItem from './MenuItem';
import './header.scss';

const headerItemsList = [
	{ title: 'For passangers', number: 1 },
	{ title: 'IEV Services', number: 2 },
	{ title: 'VIP', number: 3 },
	{ title: 'Corporate', number: 4 },
	{ title: 'Press Room', number: 5 },
];

const Header = () => {
	return (
		<section className='header'>
			<img className='header__logo' src='./img/logo.png' alt='logo'></img>
			<ul className='header_content-list'>
				{headerItemsList.map((el) => {
					return <MenuItem key={el.number} title={el.title} />;
				})}
			</ul>
		</section>
	);
};

export default Header;
