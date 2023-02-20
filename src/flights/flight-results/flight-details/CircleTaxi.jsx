import React from 'react';

const CircleTaxi = () => {
	return (
		<div
			style={{
				width: '40px',
				height: '40px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '50%',
				backgroundColor: 'yellow',
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
						<image
							id='1'
							x='10'
							y='10'
							width='24'
							height='24'
							xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQZJREFUSA3tU0sOAUEQbeIAdmLhAvYO4SwkbAkJLuUKxI7YuIDMDeyoR1dHarqmumViNZXUVFe9V5+umXGuEWMDLQNn+MkHYc38tkio3dUabKnTgxSTa9NjGMbB3SEgJXbFHpHupHvSk0xQ/BHFx6R90kLhhPCcTphsGCL2AVzkzGyqc0ciXVOIgnMj/yBiJXdAEUyyKSF2ADnIRQ1VloTkroeL8ZoWHIjZi2+AJr/q+buw/IpQtA4JdbX/YE1dQFoldMvhhrV0fWFYa1UxbphLu8HUMyaBqR8quWFXPv9v70CfNxPRVpRZRqd3dOj9FVXAJSi6XnkD/GgQth8v7ck5bNOyGtYLT7xAq0AbPt8AAAAASUVORK5CYII='
						></image>
					</g>
				</g>
			</svg>
		</div>
	);
};

export default CircleTaxi;
