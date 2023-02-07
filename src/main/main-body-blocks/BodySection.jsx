import React from 'react';

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
				<span className='description'>{description}</span>
				<button className='link'>{hyperlinkText}</button>
			</div>
		</li>
	);
};

export default BodySection;
