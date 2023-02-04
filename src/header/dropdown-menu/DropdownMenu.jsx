import React from 'react';
import classNames from 'class-names';
import './dropdown-menu.scss';

const DropdownMenu = ({ list }) => {
	const { leftElem, rightElem } = list;
	const dropmenuStyles = classNames(['dropdown-menu']);
	return (
		<div className={dropmenuStyles}>
			<div className='dropdown-menu_left-side'>
				<img
					className='dropdown-menu_left-side__img'
					src={leftElem.img}
					alt='banner'
				/>
				<span className='dropdown-menu_left-side__title'>{leftElem.title}</span>
				<span className='dropdown-menu_left-side__description'>
					{leftElem.text}
				</span>
				<button className='dropdown-menu_left-side__btn'>
					{leftElem.buttonText}
				</button>
			</div>
			<div className='dropdown-menu_right-side'>
				{rightElem.map((el) => {
					return (
						<ul className='dropdown-menu_right-side__content-list'>
							<span className='dropdown-menu_right-side__content-list-title'>
								{el.title}
							</span>
							{el.content.map((item) => {
								return (
									<li className='dropdown-menu_right-side__content-list-item'>
										{item.title}
									</li>
								);
							})}
						</ul>
					);
				})}
			</div>
		</div>
	);
};

export default DropdownMenu;
