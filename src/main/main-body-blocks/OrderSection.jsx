import React, { useState } from 'react';
import priorityLineIcon from '../imgs/priority-line-icon.svg';
import adultIcon from '../imgs/adult.svg';
import childrenIcon from '../imgs/child.svg';
import './order-section.scss';

const OrderSection = () => {
	const [childNumber, setChildNumber] = useState(0);
	const [adultNumber, setAdultNumber] = useState(1);
	return (
		<div className='priority-line'>
			<div className='priority-line_container'>
				<img
					className='main-img'
					src={priorityLineIcon}
					alt='priority-line-img'
				/>
				<h1 className='title'>Priority line</h1>
				<span>Express customs and security pass</span>
				<div className='priority-line_container__counter'>
					<div className='adult-section passanger-section'>
						<div className='img-section'>
							<img alt='adult_img' src={adultIcon} />
							<span>Adult</span>
						</div>
						<div className='count-numb'>{adultNumber}</div>
						<button
							className='adult-count_btn counter-btn'
							onClick={() => setAdultNumber(adultNumber + 1)}
						>
							+
						</button>
					</div>
					<div className='child-section'>
						<div className='img-section'>
							<img alt='child_img' src={childrenIcon} />
							<span> Child (2-12)</span>
						</div>
						<div className='count-numb'>{childNumber}</div>
						<button
							className='child-count_btn counter-btn'
							onClick={() => setChildNumber(childNumber + 1)}
						>
							+
						</button>
					</div>
					<button className='booking-btn'>Book now</button>
				</div>
			</div>
		</div>
	);
};

export default OrderSection;
