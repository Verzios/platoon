import React, { useState, useEffect } from 'react';
import { RiDiscordFill } from 'react-icons/ri';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Draggable from 'react-draggable';
import SmallCards from '../../parts/smallCards';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './joinVibe.css';
export default function JoinVibe() {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const handleDrag = (e, ui) => {
		const { x, y } = position;
		if (ui.deltaX > 1300) {
			setPosition({ x: 100, y: position.y });
		} else {
			setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
		}
	};
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	return (
		<div className="xl:h-[850px] h-[1500px]">
			<div className="grid grid-cols-2 md:px-32">
				<div className="col-span-2 lg:col-span-1 2xl:mx-0 mx-auto">
					<div
						style={{
							height: 615,
							borderRadius: 12,
							background:
								'linear-gradient(47deg, #2af3d8 0%, #d333e5 100%)',
						}}
						data-aos="widthTransition"
					>
						<span
							style={{
								background:
									'url(https://bapes.io/assets/img/join-the-community-polygon.svg) center center no-repeat',
								backgroundSize: 'contain',
								maxHeight: '31.06vh',
								width: 381,
								height: 363,
								display: 'inline-block',
								position: 'relative',
								left: '56.66%',
								bottom: '15.66%',
							}}
							data-aos="rotateCircle"
						></span>
						<div className="paragraphTextVibe">
							<h2
								style={{
									margin: '0 0 25px 0',
									lineHeight: 1.2,
									fontSize: 76,
									color: 'white',
									fontWeight: 600,
									cursor: 'pointer',
									fontFamily: 'Inconsolata',
								}}
							>
								Join The <br></br>Vibe
							</h2>
							<ul>
								<li
									style={{
										display: 'inline-block',
										margin: '0 10px',
									}}
								>
									<a href="/">
										<RiDiscordFill
											size={36}
											className="text-white hover:text-gray-300 ease-in-out duration-200"
										/>
									</a>
								</li>

								<li
									style={{
										display: 'inline-block',
										margin: '0 10px',
									}}
								>
									<a href="/">
										<AiOutlineInstagram
											className="text-white hover:text-gray-300 ease-in-out duration-200"
											size={36}
										/>
									</a>
								</li>
								<li
									style={{
										display: 'inline-block',
										margin: '0 10px',
									}}
								>
									<a href="/">
										<AiOutlineTwitter
											className="text-white hover:text-gray-300 ease-in-out duration-200"
											size={36}
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div
					className="items-center justify-center text-center col-span-2 xl:col-span-1 mt-8 lg:mt-0"
					data-aos="fade-down-left"
				>
					<div
						className="paragraphVibe xl:h-[400px] lg:h-[500px] h-[600px]"
						style={{
							color: 'white',
							margin: '0 auto',
						}}
					>
						<p
							style={{
								lineHeight: '45px',
								fontSize: 19,
								color: '#787878',
							}}
						>
							The Bionic Ape (BAPE) founders have fundamentals of
							trust, integrity, and a strong drive for community
							building and everlasting relationships. We strive to
							bring all holders of a BAPE the most upside for
							their participation in the project. Whether you are
							a BAPE holder or not, we welcome you to join us and
							be part of what may be one of the hottest ventures
							of the year.
						</p>
					</div>
				</div>
			</div>
			<Draggable
				axis="x"
				bounds={{
					left: -1300,
					right: 0,
				}}
				onDrag={handleDrag}
			>
				<div className="-mt-12 w-4/5 h-[200px] items-center justify-end absolute right-0">
					<div
						className="md:w-[600vw] w-[1000vw]"
						style={{
							transition: 'all 0.8s ease-in-out',
							transform: `translateX(${position.x}px)`,
						}}
					>
						<SmallCards top={false} />
						<SmallCards top={true} />
						<SmallCards top={false} />
						<SmallCards top={true} />
						<SmallCards top={false} />
						<SmallCards top={true} />
						<SmallCards top={false} />
						<SmallCards top={true} />
						<SmallCards top={false} />
						<SmallCards top={true} />
						<SmallCards top={false} />
						<SmallCards top={true} />
						<SmallCards top={false} />
						<SmallCards top={true} />
						<SmallCards top={false} />
						<SmallCards top={true} />
						<SmallCards top={false} />
					</div>
				</div>
			</Draggable>
		</div>
	);
}
