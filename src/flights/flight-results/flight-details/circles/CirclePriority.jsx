import React from 'react';

const CirclePriorityLine = () => {
	return (
		<div
			style={{
				width: '40px',
				height: '40px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '50%',
				backgroundColor: '#63c745',
				position: 'absolute',
				zIndex: 3,
				top: 'calc(0% - 20px)',
				left: 'calc(100% - 20px)',
			}}
		>
			<svg
				width='44px'
				height='44px'
				viewBox='0 0 44 44'
				version='1.1'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				<g
					id='Page-1'
					stroke='none'
					strokeWidth='1'
					fill='none'
					fillRule='evenodd'
				>
					<g id='Group'>
						<g id='1' transform='translate(10.000000, 10.000000)'>
							<path
								d='M4,18 L12.5,12 L4,6 L4,18 Z M13,6 L13,18 L21.5,12 L13,6 Z'
								id='Path_409'
								fill='#FFFFFF'
								fillRule='nonzero'
							></path>
							<polygon id='Path_410' points='0 0 24 0 24 24 0 24'></polygon>
						</g>
					</g>
				</g>
			</svg>
		</div>
	);
};

export default CirclePriorityLine;
