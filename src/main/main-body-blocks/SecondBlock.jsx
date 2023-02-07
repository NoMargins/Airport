import React from 'react';
import BodySection from './BodySection';
import bodySections from './bodySections.js';
import classNames from 'class-names';

const SecondBlock = () => {
	return (
		<div className='main_container__block'>
			<ul className='main-body_container__block-list'>
				{bodySections.map((el) => {
					const sectClasses = classNames([
						'list-item',
						'second-block',
						{
							'right-elem': el.id === 306 || el.id === 308,
							'left-elem': el.id === 305 || el.id === 307,
							'top-elem': el.id === 305 || el.id === 306,
							'bottom-elem': el.id === 307 || el.id === 308,
						},
					]);

					const isBottom = el.id === 307 || el.id === 308;

					if (
						el.id === 305 ||
						el.id === 306 ||
						el.id === 307 ||
						el.id === 308
					) {
						return (
							<BodySection
								key={el.id}
								sectionClasses={sectClasses}
								imgSrs={el.img}
								title={el.title}
								isBottom={isBottom}
								description={el.bodyText}
								hyperlinkText={el.hyperlinkText}
							/>
						);
					} else {
						return null;
					}
				})}
			</ul>
		</div>
	);
};

export default SecondBlock;
