import React, { useRef } from 'react';
import Carousel from '../components/carousel/carousel';
import Founders from '../components/founders/founders';
import Hero from '../components/hero/hero';
import Info from '../components/info/info';
import JoinVibe from '../components/joinVibe/joinVibe';
import Navbar from '../components/navbar/navbar';

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
		</div>
	);
}
