import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import DropdownMenu from './dropdown-menu/DropdownMenu';
import { mainItemsSelector, chosenFrameSelector } from './header.selectors';
import * as menuActions from './header.actions';
import { connect } from 'react-redux';
import logo from './dropdown-menu/imgs/logo.png';

import './header.scss';

const Header = ({ menuItems, chosenItem, setFrame }) => {
	const [elemId, setElemId] = useState(null);
	const [showContent, setShowContent] = useState(false);


	const handleMenuItemClick = (contentBoolean, elemIdValue) => {
		setElemId(elemIdValue);
		setShowContent(contentBoolean);
	};
	return (
		<header className='header'>
			<Link to='./'>
				<div
					className='header_logo-holder'
					onClick={() => handleMenuItemClick(false, null)}
				>
					<img className='header_logo-holder__logo' src={logo} alt='logo' />
				</div>
			</Link>

			<ul className='header_content-list'>
				{menuItems.map((el, index) => {
					return (
						<MenuItem
							key={index}
							id={el.id}
							chosenId={elemId}
							isActive={showContent}
							title={el.title}
							onClick={() => {
								if (showContent === false && elemId === !el.id) {
									handleMenuItemClick(true, el.id);
									setFrame(el.droppingMenu);
								}
								if (elemId === el.id && showContent === true) {
									handleMenuItemClick(false, null);
									setFrame(null);
								} else {
									handleMenuItemClick(true, el.id);
									setFrame(el.droppingMenu);
								}
							}}
						/>
					);
				})}
				<li className='header_content-list__menu-item'>
					<button className='language-btn'>EN</button>
				</li>
				<li className='header_content-list__menu-item'>
					<span className='mobile-menu'>—</span>
				</li>
			</ul>
			{chosenItem != null && (
				<DropdownMenu key={chosenItem.id} list={chosenItem} />
			)}
		</header>
	);
};

const mapState = (state) => {
	return {
		menuItems: mainItemsSelector(state),
		chosenItem: chosenFrameSelector(state),
	};
};

const mapDispatch = {
	getMenu: menuActions.menuReceived,
	setFrame: menuActions.setContent,
};

export default connect(mapState, mapDispatch)(Header);
