import React, { useState } from 'react';
import { RiDiscordFill } from 'react-icons/ri';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import Modal from './modal';
import './navbar.css';
export default function Navbar() {
	const [hover, setHover] = useState(false);
	const [click, setClick] = useState(false);
	const scrollToDiv = (id) => {
		const divElement = document.getElementById(id);
		console.log(divElement);
		divElement.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<>
			<div className="grid grid-cols-3 w-full fixed pt-[40px] z-10">
				<div style={{ paddingLeft: 40 }}>
					<button
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							flexDirection: 'column',

							height: 48,
						}}
						onMouseEnter={() => !click && setHover(true)}
						onMouseLeave={() => setHover(false)}
						onClick={() => setClick(!click)}
					>
						<b
							style={{
								backgroundColor: 'white',
								width: '40px',
								height: '3px',
								display: 'block',
								cursor: 'pointer',
								borderRadius: 40,
								transform: click ? 'rotate(-60deg)' : '',
								transition:
									'width .2s ease 0s,left .2s ease 0s,background .2s ease 0s,transform .3s ease',
							}}
						></b>
						<b
							style={{
								backgroundColor: 'white',
								width: !hover ? '40px' : '20px',
								top: click ? 40 : 50,
								height: '3px',
								borderRadius: 40,
								display: 'block',
								cursor: 'pointer',
								position: 'absolute',
								transform: click ? 'rotate(60deg)' : '',
								transition:
									'width .2s ease 0s,left .2s ease 0s,background .2s ease 0s,transform .3s ease',
							}}
						></b>
						<span
							className="md:block hidden"
							style={{
								color: 'white',
								transform: 'rotate(90deg)',
								textAlign: 'center',
								fontSize: 16,
								position: 'relative',
								fontFamily: 'Roboto',
								fontWeight: 700,
								top: 25,
							}}
						>
							Menu
						</span>
					</button>
				</div>
				<div className="items-center">
					<img
						src="assets/logo.png"
						alt="logo"
						className="mx-auto"
						draggable={true}
						style={{ position: 'relative', zIndex: 20 }}
					/>
				</div>
				<div className="items-end">
					<ul className="items-end float-right md:pr-16 pr-0">
						<li
							style={{
								display: 'inline-block',
								margin: '0 10px',
							}}
						>
							<a href="/">
								<RiDiscordFill className="text-white hover:text-gray-500 ease-in-out duration-200 md:text-4xl text-2xl" />
							</a>
						</li>

						<li
							style={{
								display: 'inline-block',
								margin: '0 10px',
							}}
						>
							<a href="/">
								<AiOutlineInstagram className="text-white hover:text-gray-500 ease-in-out duration-200 icons md:text-4xl text-2xl" />
							</a>
						</li>
						<li
							style={{
								display: 'inline-block',
								margin: '0 10px',
							}}
						>
							<a href="/">
								<AiOutlineTwitter className="text-white hover:text-gray-500 ease-in-out duration-200 md:text-4xl text-2xl" />
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div
				className={`h-screen w-screen top-0 fixed bg-black ${
					click ? 'translate-y-0' : 'translate-y-full'
				} ease-in-out duration-700 `}
				style={{ zIndex: 5 }}
			>
				<div className="top-[200px] absolute text-center w-full grid grid-row-6 gap-16 z-10">
					<div>
						<a
							className="text-white text-3xl font-bold hover:text-purple-600 ease-in-out duration-500"
							style={{ fontFamily: 'Inconsolata' }}
							href="#carousel"
							onClick={() => setClick(!click)}
						>
							PLATOON
						</a>
					</div>
					<div>
						<h2
							className="text-white text-3xl font-bold hover:text-purple-600 ease-in-out duration-500 cursor-pointer"
							style={{ fontFamily: 'Inconsolata' }}
						>
							ABOUT
						</h2>
					</div>
					<div>
						<a
							href="/"
							className="text-white text-3xl font-bold hover:text-purple-600 ease-in-out duration-500"
							style={{ fontFamily: 'Inconsolata' }}
						>
							COMMUNITY
						</a>
					</div>
					<div>
						<a
							href="/"
							className="text-white text-3xl font-bold hover:text-purple-600 ease-in-out duration-500"
							style={{ fontFamily: 'Inconsolata' }}
						>
							FAQ
						</a>
					</div>
					<div>
						<a
							href="/"
							className="text-white text-3xl font-bold hover:text-purple-600 ease-in-out duration-500"
							style={{ fontFamily: 'Inconsolata' }}
						>
							FOUNDERS
						</a>
					</div>
					<div>
						<a
							href="/"
							className="text-white text-3xl font-bold hover:text-purple-600 ease-in-out duration-500"
							style={{ fontFamily: 'Inconsolata' }}
						>
							STAKING
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
