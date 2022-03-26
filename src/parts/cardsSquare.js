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
			className={`w-64 h-64 rounded-xl bg-white ${
				top ? `top-16 ` : 'top-0 '
			}relative inline-block mx-12`}
			style={{
				background: 'url(../assets/bionic-apes-18.png)',
				backgroundSize: 'contain',
			}}
		></div>
	);
}
