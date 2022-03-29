import React from 'react';
import './achievements.css';
export default function Achievements({ data, id }) {
	return (
		<>
			<div className="md:flex hidden flex-wrap ">
				<div className="flex flex-auto justify-center items-center w-[350px]">
					{id % 2 !== 0 ? (
						<h2
							style={{
								color: 'white',
								fontSize: 22,
							}}
						>
							{data.title}
						</h2>
					) : data.achieved ? (
						<h2
							style={{
								color: 'white',
								fontSize: 32,
							}}
							className="displayTick"
						>
							Completed
						</h2>
					) : (
						'In Progress'
					)}
				</div>
				<div
					className="flex items-center justify-center mx-auto "
					style={{
						border: data.achieved
							? '1px solid purple'
							: '1px solid #787878',
						borderRadius: '100%',
						width: 145,
						height: 145,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<img
						src={data.icon}
						width={48}
						height={48}
						alt={data.icon}
					/>
				</div>
				<div className="flex justify-center items-center w-[350px]">
					{id % 2 === 0 ? (
						<h2
							style={{
								color: 'white',
								fontSize: 22,
							}}
						>
							{data.title}
						</h2>
					) : data.achieved ? (
						<h2
							style={{
								color: 'white',
								fontSize: 32,
							}}
							className="displayTick"
						>
							Completed
						</h2>
					) : (
						'In Progress'
					)}
				</div>
			</div>
			<div className="md:hidden flex flex-wrap ">
				<div
					className="flex items-center justify-center mx-auto "
					style={{
						border: data.achieved
							? '1px solid purple'
							: '1px solid #787878',
						borderRadius: '100%',
						width: 145,
						height: 145,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<img
						src={data.icon}
						width={48}
						height={48}
						alt={data.icon}
					/>
				</div>
				<div className="flex flex-auto justify-center items-center w-full text-center">
					{data.achieved ? (
						<h2
							style={{
								color: 'white',
								fontSize: 32,
							}}
							className="displayTick"
						>
							Completed
						</h2>
					) : (
						'In Progress'
					)}
				</div>
				<div className="flex justify-center items-center text-center w-full">
					<h2
						style={{
							color: 'white',
							fontSize: 22,
						}}
					>
						{data.title}
					</h2>
				</div>
			</div>
		</>
	);
}
