import React from 'react';
import BodySection from './BodySection';
import bodySections from './bodySections.js';
import classNames from 'class-names';

const ThirdBlock = () => {
	return (
		<div className='main_container__block'>
			<ul className='main-body_container__block-list'>
				{bodySections.map((el) => {
					const sectClasses = classNames([
						'list-item',
						'third-block',
						{
							'right-elem': el.id === 310,
							'left-elem': el.id === 309,
							'top-elem': el.id === 309 || el.id === 310,
						},
					]);

					if (el.id === 309 || el.id === 310) {
						return (
							<BodySection
								key={el.id}
								sectionClasses={sectClasses}
								imgSrs={el.img}
								title={el.title}
								isBottom={false}
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

export default ThirdBlock;
