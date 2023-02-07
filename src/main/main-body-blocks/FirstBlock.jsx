import React from 'react';
import InfoSection from './InfoSection';
import BodySection from './BodySection';
import bodySections from './bodySections.js';
import classNames from 'class-names';

const FirstBlock = () => {
	return (
		<div className='main-body_container__block'>
			<InfoSection />
			<ul className='main-body_container__block-list'>
				{bodySections.map((el) => {
					const sectClasses = classNames([
						'list-item',
						'first-block',
						{
							'right-elem': el.id === 302 || el.id === 304,
							'left-elem': el.id === 301 || el.id === 303,
							'top-elem': el.id === 301 || el.id === 302,
							'bottom-elem': el.id === 303 || el.id === 304,
						},
					]);

					const isBottom = el.id === 303 || el.id === 304;

					if (
						el.id === 301 ||
						el.id === 302 ||
						el.id === 303 ||
						el.id === 304
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

export default FirstBlock;
