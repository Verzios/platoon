import React from 'react';
import Achievements from '../../parts/achievements';
import '../../parts/achievements.css';
export default function RoadMap() {
	const roadMap = [
		{
			title: 'Structure the discord server',
			icon: 'https://bapes.io/assets/img/road-step-icon-7.svg',
			achieved: true,
		},
		{
			title: 'Structure the discord server',
			icon: 'https://bapes.io/assets/img/road-step-icon-7.svg',
			achieved: true,
		},
		{
			title: 'Structure the discord server',
			icon: 'https://bapes.io/assets/img/road-step-icon-7.svg',
			achieved: true,
		},
		{
			title: 'Structure the discord server',
			icon: 'https://bapes.io/assets/img/road-step-icon-5.svg',
			achieved: true,
		},
		{
			title: 'Structure the discord server',
			icon: 'https://bapes.io/assets/img/road-step-icon-5.svg',
			achieved: true,
		},
		{
			title: 'Structure the discord server',
			icon: 'https://bapes.io/assets/img/road-step-icon-5.svg',
			achieved: true,
		},
		{
			title: 'Structure the discord server',
			icon: 'https://bapes.io/assets/img/road-step-icon-2.svg',
			achieved: true,
		},
		{
			title: 'Structure the discord server',
			icon: 'https://bapes.io/assets/img/road-step-icon-2.svg',
			achieved: true,
		},
		{
			title: 'Structure the discord server',
			icon: 'https://bapes.io/assets/img/road-step-icon-2.svg',
			achieved: true,
		},
		{
			title: 'Structure the discord server',
			icon: 'https://bapes.io/assets/img/road-step-icon-2.svg',
			achieved: true,
		},
	];
	return (
		<div
			className="h-full pb-16"
			style={{
				background:
					'url(https://bapes.io/assets/img/roadmap-bg.svg) bottom center repeat-x',
			}}
		>
			<h3
				style={{
					textAlign: 'center',
					fontSize: 64,
					color: 'white',
					fontFamily: 'Ubuntu',
				}}
			>
				RoadMap
			</h3>
			<p
				style={{
					color: '#787878',
					maxWidth: 700,
					margin: '0 auto',
					textAlign: 'center',
					fontWeight: 700,
				}}
			>
				One of our core principles is building a positive community.
				Life is simply too short for toxicity, we want to create a
				community of like-minded people, who are eager to help one
				another. We DO NOT hate, we DO NOT discriminate, we are BAPE. As
				we build the community, we want you, as a holder or a dreamer,
				or just a visitor to understand – we are here to help each
				other, bring up one another and align each other with a shared
				focus: to make sure WE ALL MAKE IT. Stay tuned to our roadmap +
				social channels as we evolve this project to greater heights,
				and begin to unravel our confirmed plans.
			</p>
			<div className="text-center">
				<ul className="mt-16 mx-auto inline-block">
					{roadMap.map((ach, idx) => {
						return (
							<li
								className={
									idx === roadMap.length - 1 ? '' : 'line'
								}
							>
								<Achievements data={ach} id={idx} />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
