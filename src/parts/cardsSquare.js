import React, { useEffect } from 'react';
import AOS from 'aos';
export default function CardsSquare({ top }) {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	return (
		<div
			data-aos={`${top ? 'fade-up' : 'fade-down'}`}
			className={`md:w-64 md:h-64 w-32 h-32 rounded-xl bg-white ${
				top ? `md:top-16 ` : 'md:top-0 '
			} top-0 relative inline-block md:mx-12 mx-2`}
			style={{
				background: 'url(../assets/bionic-apes-18.png)',
				backgroundSize: 'contain',
			}}
		></div>
	);
}
