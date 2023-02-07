import React from 'react';
import './main-body.scss';
import FirstBlock from './main-body-blocks/FirstBlock.jsx';
import SecondBlock from './main-body-blocks/SecondBlock.jsx';
import ThirdBlock from './main-body-blocks/ThirdBlock.jsx';
import OrderSection from './main-body-blocks/OrderSection';

const MainBody = () => {
	return (
		<section className='main-body'>
			<div className='main-body_container'>
				<FirstBlock />
				<OrderSection />
				<SecondBlock />
				<ThirdBlock />
			</div>
		</section>
	);
};

export default MainBody;
