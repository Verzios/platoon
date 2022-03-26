import React, { useEffect } from 'react';
import AOS from 'aos';
export default function SmallCards({ top }) {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	return (
		<div
			data-aos="fade-up"
			className={`w-36 h-36 rounded-xl bg-white relative inline-block mx-6`}
			style={{
				background: 'url(../assets/bionic-apes-18.png)',
				backgroundSize: 'contain',
			}}
		></div>
	);
}
