import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './info.css';
export default function Info() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			animatedClassName: 'animated',
		});
	}, []);
	return (
		<div
			className="text-center  justify-center md:h-[1200px] h-[1300px]"
			data-aos="fade-up"
			style={{
				color: 'white',
				fontSize: 25,
				fontFamily: 'Ubuntu',
				lineHeight: 1.2,
			}}
		>
			{/* <span
				style={{
					background: 'url(../../assets/banana-left.png)',
					width: '502px',
					height: 775,
					display: 'inline-block',
					left: -30,
					marginBottom: 64,
					position: 'absolute',
				}}
				className="banana-left-animation"
				data-aos="rotateElement"
			></span> */}
			{/* <span
				style={{
					background:
						'url(../../assets/banana-right.png) 0 0 no-repeat',
					width: '337px',
					height: 412,
					display: 'inline-block',
					right: 0,
					marginTop: 140,
					position: 'absolute',
				}}
				data-aos="rotateOppositeElement"
			></span> */}
			<div data-aos="fade-up">
				<h3 className="pt-64">Today is:</h3>
				<h2 className="dateInfo">March 25, 5555</h2>
				<p
					className="md:mx-auto mx-4 mt-4 paragraphInfo"
					style={{ color: '#787878', maxWidth: 1000 }}
				>
					The Robopacolypse has wiped out all the bionic apes in the
					Metaverse. Only 5,555 randomly generated and artfully
					curated Bionic Apes have survived by hiding in.
				</p>
			</div>
			<div className="bgAfter"></div>
		</div>
	);
}
