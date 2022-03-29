import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './founders.css';
import FounderCard from '../../parts/founderCard';

import Slider from 'react-slick';
export default function Founders() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [threeActives, setThreeActives] = useState([0, 1, 2]);
	const [translatePosition, setTranslatePosition] = useState(0);
	const founders = [
		{
			index: 0,
			image: '../assets/jian-t.png',
			title: 'Head of Communications & Integration',
			name: 'Elias V.',
			description:
				"Social media entrepreneur & investor who left his life'behind to dive into the world of crypto.",
		},
		{
			index: 1,
			image: '../assets/johny-m.png',
			title: 'Head of Communications & Integration',
			name: 'Pinelo V.',
			description:
				"Social media entrepreneur & investor who left his life'behind to dive into the world of crypto.",
		},
		{
			index: 2,
			image: '../assets/sami-m.png',
			title: 'Head of Communications & Integration',
			name: 'Andrew K.',
			description:
				"Social media entrepreneur & investor who left his life'behind to dive into the world of crypto.",
		},
		{
			index: 3,
			image: '../assets/sami-m.png',
			title: 'Head of Communications & Integration',
			name: 'George T.',
			description:
				"Social media entrepreneur & investor who left his life'behind to dive into the world of crypto.",
		},
	];
	const NextArrow = ({ onClick }) => {
		return (
			<button
				className="w-24 h-24 mx-auto absolute right-0 top-52 nextArrow"
				style={{
					background:
						'url(../assets/icons8-left-arrow-64.png) center center no-repeat',
					border: '1px solid #787878',
					borderRadius: '50%',
					transform: 'rotate(180deg)',

					top: '50%',
				}}
				onClick={onClick}
			></button>
		);
	};
	const PrevArrow = ({ onClick }) => {
		return (
			<button
				className="w-24 h-24  absolute prevButton"
				style={{
					background:
						'url(../assets/icons8-left-arrow-64.png) center center no-repeat',
					border: '1px solid #787878',
					borderRadius: '50%',
					top: '50%',
				}}
				onClick={onClick}
			></button>
		);
	};
	const settings = {
		infinite: true,
		lazyLoad: true,
		speed: 300,
		centerMode: true,
		centerPadding: 0,
		slidesToShow: 3,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setActiveIndex(next),
	};
	const settings2 = {
		infinite: true,
		lazyLoad: true,
		speed: 300,
		centerMode: true,
		centerPadding: 0,
		slidesToShow: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setActiveIndex(next),
	};
	useEffect(() => {
		AOS.init({
			duration: 800,
		});
	}, []);
	const handleNext = (e) => {
		e.preventDefault();

		setActiveIndex(activeIndex + 1);
		var newActiveElement = threeActives.map((active) => {
			return active + 1;
		});
		setThreeActives(newActiveElement);
		setTranslatePosition(translatePosition + 382);
		console.log(translatePosition);
		console.log(threeActives);
	};
	const handlePrevious = (e) => {
		e.preventDefault();
		if (activeIndex !== 0) {
			setActiveIndex(activeIndex - 1);
			var newActiveElement = threeActives.map((active) => {
				return active - 1;
			});
			setTranslatePosition(translatePosition - 382);
			setThreeActives(newActiveElement);
		}
	};
	return (
		<div className="mt-16 testDiv md:h-screen h-[1200px]">
			<div data-aos="fade-up" className=" containerDiv ">
				<h2
					className="text-center text-white z-10 mb-16"
					style={{
						fontSize: 52,
						fontFamily: 'Inconsolata',
						fontWeight: 800,
					}}
				>
					Platoon_lab Founders
				</h2>

				{/* <button
					className="w-24 h-24 mx-auto "
					style={{
						background:
							'url(../assets/icons8-left-arrow-64.png) center center no-repeat',
						border: '1px solid #787878',
						borderRadius: '50%',
					}}
					onClick={handlePrevious}
				></button> */}

				<div
					style={{ maxWidth: 1120 }}
					className="w-full mx-auto xl:flex hidden"
				>
					<Slider
						{...settings}
						style={{
							width: '100%',
							height: 300,
							marginTop: 128,
						}}
						className="mx-auto"
					>
						{founders.map((founder, idx) => {
							return (
								<div
									className={
										idx === activeIndex
											? 'slide activeSlide'
											: 'slide'
									}
								>
									{idx === activeIndex ? (
										<FounderCard
											name={founder.name}
											title={founder.title}
											image={founder.image}
											description={founder.description}
											active={true}
										/>
									) : (
										<FounderCard
											name={founder.name}
											title={founder.title}
											image={founder.image}
											description={founder.description}
										/>
									)}
								</div>
							);
						})}
					</Slider>
				</div>
				<div
					style={{ maxWidth: 320 }}
					className="w-full mx-auto xl:hidden flex mb-32"
				>
					<Slider
						{...settings2}
						style={{
							width: '100%',
							height: 300,
							marginTop: 128,
						}}
						className="mx-auto"
					>
						{founders.map((founder, idx) => {
							return (
								<div
									className={
										idx === activeIndex
											? 'slide activeSlide'
											: 'slide'
									}
								>
									{idx === activeIndex ? (
										<FounderCard
											name={founder.name}
											title={founder.title}
											image={founder.image}
											description={founder.description}
											active={true}
										/>
									) : (
										<FounderCard
											name={founder.name}
											title={founder.title}
											image={founder.image}
											description={founder.description}
										/>
									)}
								</div>
							);
						})}
					</Slider>
				</div>
				{/* <button
					className="w-24 h-24 mx-auto "
					style={{
						background:
							'url(../assets/icons8-left-arrow-64.png) center center no-repeat',
						border: '1px solid #787878',
						transform: 'rotate(180deg)',
						borderRadius: '50%',
					}}
					onClick={handleNext}
				></button> */}
			</div>
		</div>
	);
}
