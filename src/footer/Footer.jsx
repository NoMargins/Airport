import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import footerItems from './footer-items-list.js';
import FooterList from './FooterList.jsx';
import './footer.scss';

const FooterElem = () => {
	const firstCol = footerItems.filter((el) => el.id === 801);
	const firstColItems = firstCol.flatMap((el) => el.items);
	const secondCol = footerItems.filter((el) => el.id === 802);
	const secondColItems = secondCol.flatMap((el) => el.items);
	const thirdCol = footerItems.filter((el) => el.id === 803);
	const thirdColItems = thirdCol.flatMap((el) => el.items);
	return (
		<footer>
			<div className='footer_container'>
				<div className='footer_container__main'>
					<ul className='first-col col'>
						<li className='title'>For passangers</li>
						{firstColItems.map(({ id, text }) => {
							return <FooterList key={id} text={text} />;
						})}
					</ul>
					<ul className='second-col col'>
						<li className='title'>Corporate</li>
						{secondColItems.map(({ id, text }) => {
							return <FooterList key={id} text={text} />;
						})}
					</ul>
					<ul className='third-col col'>
						<li className='title'>Press centre</li>
						{thirdColItems.map(({ id, text }) => {
							return <FooterList key={id} text={text} />;
						})}
					</ul>
					<ul className='fourth-col col'>
						<li>
							<div className='title'>Contact us</div>
						</li>
						<li>
							<div className='telephone'>+38 (044) 500 49 73</div>
						</li>
						<li>
							<div className='text'>Follow us:</div>
						</li>
						<li className='icons-container'>
							<FontAwesomeIcon className='icon' icon={brands('facebook-f')} />
							<FontAwesomeIcon className='icon' icon={brands('twitter')} />
							<FontAwesomeIcon className='icon' icon={brands('instagram')} />
							<FontAwesomeIcon className='icon' icon={brands('youtube')} />
							<FontAwesomeIcon className='icon' icon={brands('linkedin-in')} />
						</li>
					</ul>
				</div>
				<div className='footer_container__bottom'>
					@ Developed by Helen Riabenko, 2023
				</div>
			</div>
		</footer>
	);
};

export default FooterElem;
