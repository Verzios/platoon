import React from 'react';
import './hero.css';
export default function Hero() {
	return (
		<>
			<div
				style={{
					background:
						'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)),url(assets/hero-bg.jpg) 0 0 no-repeat',
				}}
				className="h-screen"
			>
				<div className="absolute bottom-0 h-72 bg-black w-full blurBackground z-0 ">
					<div className="w-4/5  mx-auto mt-5 border-b-2 h-48 border-gray-600">
						<div className="grid grid-cols-2">
							<div>
								<h1 className="text-white blockChain">
									Solana Blockchain
								</h1>
								<h1 className="brandName">Platoon_Lab</h1>
							</div>
							<div
								className=""
								style={{
									display: 'flex',
									justifyContent: 'flex-end',
								}}
							>
								<button className="circle bg-transparent text-center relative right-1/3 h-full">
									<span className="circle_btn text-white  pr-32 relative text-xl font-bold flex ">
										Explore
									</span>
								</button>
							</div>
						</div>
					</div>
					<div className="mt-4 grid grid-cols-2 w-3/5 mx-auto">
						<div className="text-center text-white">
							<h2
								style={{
									fontSize: 19,
									textTransform: 'uppercase',
									fontWeight: 700,
								}}
							>
								Public Sale
								<span className="pl-4 text-gray-500">TBA</span>
							</h2>
						</div>
						<div className="text-center text-white">
							<h2
								style={{
									fontSize: 19,
									textTransform: 'uppercase',
									fontWeight: 700,
								}}
							>
								Whitelist
								<span className="pl-4 text-gray-500">TBA</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}