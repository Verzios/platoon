import React from 'react';

export default function Footer() {
	return (
		<div className="mt-16 px-12">
			<div className="pb-16 " style={{ borderBottom: '1px solid white' }}>
				<h3
					style={{
						textAlign: 'center',
						color: 'white',
						fontSize: 32,
						fontFamily: 'Inconsolata',
					}}
				>
					Welcome to the Future
				</h3>
			</div>
			<div
				className="grid grid-cols-12 p-6"
				style={{ color: 'white', justifyContent: 'space-between' }}
			>
				<div
					className="lg:col-span-6 col-span-12 flex lg:flex-row flex-col justify-between text-center text-xl "
					style={{ fontFamily: 'Inconsolata', fontWeight: 600 }}
				>
					<h3>platoon_lab@gmail.com</h3>
					<h3>Terms and Conditions</h3>
					<h3>Privacy Policy</h3>
					<h3>Contact Us</h3>
				</div>
				<h3
					className="lg:col-span-6 col-span-12 items-end justify-end"
					style={{
						textAlign: 'end',
						fontFamily: 'Inconsolata',
						fontWeight: 600,
					}}
				>
					Copyright 2022 Platoon_lab NFT. All Rights Reserved
					greekfatcoders.gr .
				</h3>
			</div>
		</div>
	);
}
