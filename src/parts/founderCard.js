import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
export default function FounderCard({
	width,
	active,
	image,
	name,
	title,
	description,
	display,
}) {
	return (
		<div
			className="w-full mr-12"
			style={{
				maxWidth: '320px',

				transition: 'all 0.2s ease',
			}}
		>
			<div style={{ minHeight: 360, marginBottom: 30 }}>
				<img
					className="mx-auto"
					src={image}
					alt="logo"
					style={{
						maxWidth: '320px',
						borderRadius: '100%',
						transform: active
							? 'scale(1.485)'
							: 'scale(1) translate(40px)',

						transition: 'all 1s ease',
					}}
				/>
			</div>

			<div
				style={{
					marginTop: '100px',
					textAlign: 'center',
					color: 'white',
				}}
			>
				<h2 style={{ fontSize: 28 }}>
					{name}
					<AiOutlineInstagram
						className="text-white hover:text-gray-500 ease-in-out duration-200 inline-block ml-6"
						size={28}
					/>
					|
					<AiOutlineTwitter
						className="text-white hover:text-gray-500 ease-in-out duration-200 inline-block"
						size={28}
					/>
				</h2>
				<h2
					style={{
						color: '#787878',
						fontWeight: 600,
						fontSize: 22,
					}}
				>
					{title}
				</h2>
				<span style={{ color: '#787878' }}>{description}</span>
			</div>
		</div>
	);
}
