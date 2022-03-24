import React, { useState } from 'react';

export default function Modal({ isOpen }) {
	const [hover, setHover] = useState(false);
	const [click, setClick] = useState(false);
	return (
		<>
			{!click ? (
				<div
					className={`h-screen top-0 w-screen fixed bg-gray-50 ${
						isOpen ? 'translate-y-0' : 'translate-y-full'
					} ease-in-out duration-700 z-1`}
				>
					<h2 className="text-white">Hello</h2>
				</div>
			) : (
				<button
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						flexDirection: 'column',
						height: 48,
					}}
					onMouseEnter={() => !click && setHover(true)}
					onMouseLeave={() => setHover(false)}
					onClick={() => setClick(!click)}
				>
					<b
						style={{
							backgroundColor: 'white',
							width: '40px',
							height: '3px',
							display: 'block',
							cursor: 'pointer',
							borderRadius: 40,
							transform: click ? 'rotate(-60deg)' : '',
							transition:
								'width .2s ease 0s,left .2s ease 0s,background .2s ease 0s,transform .3s ease',
						}}
					></b>
					<b
						style={{
							backgroundColor: 'white',
							width: !hover ? '40px' : '20px',
							top: click ? 40 : 50,
							height: '3px',
							borderRadius: 40,
							display: 'block',
							cursor: 'pointer',
							position: 'absolute',
							transform: click ? 'rotate(60deg)' : '',
							transition:
								'width .2s ease 0s,left .2s ease 0s,background .2s ease 0s,transform .3s ease',
						}}
					></b>
					<span
						style={{
							color: 'white',
							transform: 'rotate(270deg)',
							textAlign: 'center',
							fontSize: 16,
							position: 'relative',
							fontFamily: 'Roboto',
							fontWeight: 700,
							top: 25,
						}}
					>
						Menu
					</span>
				</button>
			)}
		</>
	);
}
