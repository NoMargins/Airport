import React from 'react';
import PropTypes from 'prop-types';

const BodySection = ({
	sectionClasses,
	imgSrs,
	title,
	description,
	hyperlinkText,
	isBottom,
}) => {
	const backgroundStyle = {
		backgroundImage: `url(${imgSrs})`,
		backgroundPosition: 'left center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	};

	return (
		<li className={sectionClasses} style={!isBottom ? backgroundStyle : {}}>
			<div
				className='main-body__header'
				style={isBottom ? backgroundStyle : {}}
			>
				<h3 className='title'>
					<span>{title}</span>
				</h3>
			</div>
			<div className='section-body'>
				<div className='description'>{description}</div>
				<button className='link'>{hyperlinkText}</button>
			</div>
		</li>
	);
};

BodySection.propTypes = {
	sectionClasses: PropTypes.string,
	imgSrs: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	hyperlinkText: PropTypes.string,
	isBottom: PropTypes.bool,
};

export default BodySection;
