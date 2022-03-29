import React from 'react';
import './hero.css';
export default function Hero() {
	return (
		<>
			<div
				style={{
					background:
						'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)),url(assets/hero-bg.jpg) 0 0 no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center bottom',
					backgroundAttachment: 'fixed',
				}}
				className="h-screen mb-32"
			>
				<div className="absolute bottom-0 h-96 bg-black w-full blurBackground z-0  ">
					<div className="w-4/5  mx-auto mt-5 border-b-2 h-48 border-gray-600">
						<div className="grid grid-cols-2">
							<div className="md:col-span-1 col-span-2">
								<h1 className="text-white blockChain ">
									Solana Blockchain
								</h1>
								<h1 className="brandName ">Platoon_Lab</h1>
							</div>
							<div
								className="md:flex hidden"
								style={{
									justifyContent: 'flex-end',
								}}
							>
								<a
									className="circle bg-transparent text-center relative right-1/3 h-full"
									href="#carousel"
								>
									<span className="circle_btn text-white  pr-32 relative text-xl font-bold flex ">
										Explore
									</span>
								</a>
							</div>
						</div>
					</div>
					<div className="mt-4 grid grid-cols-2 md:w-3/5 w-full  md:mx-auto mx-0">
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
