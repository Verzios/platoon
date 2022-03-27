import React, { useRef } from 'react';
import Carousel from '../components/carousel/carousel';
import Footer from '../components/footer/footer';
import Founders from '../components/founders/founders';
import Hero from '../components/hero/hero';
import Info from '../components/info/info';
import JoinVibe from '../components/joinVibe/joinVibe';
import Navbar from '../components/navbar/navbar';
import RoadMap from '../components/roadMap/roadMap';

export default function Home() {
	const firstItemRef = useRef(null);
	return (
		<div>
			<Navbar />
			<Hero />
			<Carousel ref={firstItemRef} />
			<Info />
			<JoinVibe />
			<Founders />
			<RoadMap />
			<Footer />
		</div>
	);
}
