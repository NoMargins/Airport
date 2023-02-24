import React from 'react';
import PropTypes from 'prop-types';
import './dropdown-menu.scss';

const DropdownMenu = ({ list }) => {
	const { leftElem, rightElem } = list;
	return (
		<div className='dropdown-menu'>
			<div className='dropdown-menu_container'>
				<div className='dropdown-menu_container__left-side'>
					<img
						className='dropdown-menu_container__left-side__img'
						src={leftElem.img}
						alt='banner'
					/>
					<span className='dropdown-menu_container__left-side__title'>
						{leftElem.title}
					</span>
					<span className='dropdown-menu_container__left-side__description'>
						{leftElem.text}
					</span>
					<button className='dropdown-menu_container__left-side__btn'>
						{leftElem.buttonText}
					</button>
				</div>
				<div className='dropdown-menu_container__right-side'>
					{rightElem.map((el) => {
						return (
							<ul
								key={el.id}
								className='dropdown-menu_container__right-side__content-list'
							>
								<li className='dropdown-menu_container__right-side__content-list-title'>
									{el.title}
								</li>
								{el.content.map((item) => {
									return (
										<li
											key={item.title}
											className='dropdown-menu_container__right-side__content-list-item'
										>
											{item.title}
										</li>
									);
								})}
							</ul>
						);
					})}
				</div>
			</div>
		</div>
	);
};

DropdownMenu.propTypes = {
	list: PropTypes.object,
	leftElem: PropTypes.object,
	rightElem: PropTypes.array,
};

export default DropdownMenu;
