import React, { useState, useRef, useEffect } from 'react';
import { RiDiscordFill } from 'react-icons/ri';
import CardsSquare from '../../parts/cardsSquare';
import Draggable from 'react-draggable';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './carousel.css';

export default function Carousel() {
	const [xPos, setXPos] = useState(0);
	const [style, setStyle] = React.useState({
		transform: `translateX(${xPos}px)`,
	});
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const onClick = (direction) => {
		if (direction === 'left' && position.x < 100) {
			setPosition({ x: position.x + 500, y: position.y });
		} else if (direction !== 'left' && position.x > -4000) {
			setPosition({ x: position.x - 500, y: position.y });
		} else {
			setPosition({ x: 100, y: position.y });
		}

		setStyle({ transform: `translateX(${position.x}px)` });
		console.log(position);
	};
	const handleDrag = (e, ui) => {
		const { x, y } = position;
		if (ui.deltaX > 2100) {
			setPosition({ x: 100, y: position.y });
		} else {
			setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
		}

		console.log(position);
	};
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	return (
		<div className="h-[1000px]">
			<div className="w-4/5  mx-auto  h-48 border-gray-600" id="carousel">
				<div className="grid grid-cols-2 test">
					<div>
						<h1
							className="text-white"
							style={{ fontSize: 64, fontWeight: 700 }}
							data-aos="fade-right"
							data-aos-anchor-placement="bottom-bottom"
						>
							5,555 Bionic Apes
						</h1>
						<div
							data-aos="fade-left"
							data-aos-anchor-placement="bottom-bottom"
						>
							<h1
								className=""
								style={{ fontSize: 20, color: '#787878' }}
							>
								5,555 unique Bionic Apes on the Ethereum
								blockchain (ERC-721) are the only robotic
								species left after the Robopocalypse.
							</h1>
							<button
								style={{
									textTransform: 'uppercase',
									color: 'white',
									marginTop: 20,
									borderRadius: 20,
									fontSize: 12,
									fontWeight: 700,
									border: '1px solid gray',
									padding: 10,
								}}
							>
								<RiDiscordFill
									size={18}
									className="text-white hover:text-gray-500 ease-in-out duration-200 inline-block mr-3"
								/>
								<span>Join Platoon_Lab on discord</span>
							</button>
						</div>
					</div>

					<div
						className=""
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
						}}
					></div>
				</div>
			</div>
			<Draggable
				axis="x"
				bounds={{
					left: -2300,
					right: 100,
				}}
				onDrag={handleDrag}
			>
				<div className="mt-32 w-full h-[400px] items-center justify-end absolute right-0">
					<div
						className="w-[600vw]"
						style={{
							transition: 'all 0.8s ease-in-out',
							transform: `translateX(${position.x}px)`,
						}}
					>
						<CardsSquare top={false} />
						<CardsSquare top={true} />
						<CardsSquare top={false} />
						<CardsSquare top={true} />
						<CardsSquare top={false} />
						<CardsSquare top={true} />
						<CardsSquare top={false} />
						<CardsSquare top={true} />
						<CardsSquare top={false} />
						<CardsSquare top={true} />
						<CardsSquare top={false} />
						<CardsSquare top={true} />
						<CardsSquare top={false} />
						<CardsSquare top={true} />
						<CardsSquare top={false} />
						<CardsSquare top={true} />
						<CardsSquare top={false} />
					</div>
				</div>
			</Draggable>
		</div>
	);
}
