import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'class-names';

const MenuItem = ({ title, onClick, isActive, id, chosenId }) => {
	const changingBtnStyles =
		id === chosenId && isActive
			? classNames([
					'header_content-list__menu-item-btn',
					{ 'active-menu-btn': isActive },
			  ])
			: 'header_content-list__menu-item-btn';
	return (
		<>
			<li className='header_content-list__menu-item' onClick={onClick}>
				<button className={changingBtnStyles}>{title}</button>
			</li>
		</>
	);
};

MenuItem.propTypes = {
	title: PropTypes.string,
	onClick: PropTypes.func,
	isActive: PropTypes.bool,
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	chosenId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default MenuItem;
