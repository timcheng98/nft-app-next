import React, { useEffect } from 'react';
import { Row, Col, Divider, Grid } from 'antd';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Team = () => {
	const { useBreakpoint } = Grid
	const xs = useBreakpoint().xs

	useEffect(() => {
		// gsap.utils.toArray(".roadmap-container").forEach((container) => {
		// 	const sections = container.querySelectorAll(".roadmap-section");

		// 	let tl = gsap.timeline({
		// 		scrollTrigger: {
		// 			trigger: container,
		// 			pin: true,   // pin the trigger element while active,
		// 			toggleActions: "play none none reverse",
		// 			start: "top-=150px top", // when the top of the trigger hits the top of the viewport
		// 			// end: "+=4000", // end after scrolling 500px beyond the start
		// 			scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
		// 			snap: {
		// 				snapTo: "labels", // snap to the closest label in the timeline
		// 				duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
		// 				delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
		// 				ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
		// 			},
		// 			markers: true
		// 		}
		// 	});

		// 	_.map(sections, (item) => {
		// 		tl.addLabel("start")
		// 		tl.from(".team", { background: 'rgb(109, 40, 217)' })
		// 		return tl.from(item, { opacity: 0, scale: 0.5, y: 100 }, 1)
		// 	})
		// });

		// let tl = gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: '.team',
		// 		pin: true,   // pin the trigger element while active,
		// 		// toggleActions: "play none none reverse",
		// 		start: "top top", // when the top of the trigger hits the top of the viewport
		// 		// end: "+=4000", // end after scrolling 500px beyond the start
		// 		// scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
		// 		// snap: {
		// 		// 	snapTo: "labels", // snap to the closest label in the timeline
		// 		// 	duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
		// 		// 	delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
		// 		// 	ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
		// 		// },
		// 		markers: true
		// 	}
		// });

		// tl.addLabel("start")
		// 	.from('.team', { opacity: 1, y: 200, duration: 1 })
	}, []);

	return (
		<Row
		className="team"
			style={{
				backgroundColor: 'rgb(109, 40, 217)',
				padding: '30px 0px 50px 0px',
			}}
		>
			<Col span={24}>
				<Row className="roadmap-container">
					<Col span={24} className="roadmap-section team-header">
						<h1
							style={{
								color: '#fff',
								fontSize: 48,
								// marginTop: 30,
								fontWeight: '600',
								textAlign: 'center',
							}}
						>
							The Team
						</h1>
					</Col>
				</Row>
				<Row className="roadmap-container" justify='center' gutter={[0, 24]}>
					<Col xs={22} md={14}>
						<Row justify='space-between'>
							<Col xs={24} md={10} className="roadmap-section item-1">
								<Row justify='center' gutter={[0, 24]}>
									<Col xs={12} md={16}>
										<img
											src='/team_1.png'
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'contain',
											}}
										/>
									</Col>
								</Row>
								<Row justify="center">
									<Col xs={16} md={24}>
										<Divider
											style={{
												textAlign: 'center',
												color: '#fff',
												borderColor: '#fff',
												fontWeight: 'bold',
												marginTop: 10,
											}}
										>
											XXX
										</Divider>
										<p
											style={{
												textAlign: 'center',
												color: '#fff',
												fontWeight: 'bold',
											}}
										>
											Co-founder and the technical manager of Squat Panda. Full
											Stack developer in Web, Mobile and blockchain aspect. I
											believe blockchain can change the world.
										</p>
									</Col>
								</Row>
							</Col>
							<Col xs={24} md={10} className="roadmap-section item-2">
								<Row justify='center' gutter={[0, 24]}>
									<Col xs={12} md={16}>
										<img
											src='/team_2.png'
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'contain',
											}}
										/>
									</Col>
								</Row>
								<Row justify="center">
									<Col xs={16} md={24}>
										<Divider
											style={{
												textAlign: 'center',
												color: '#fff',
												borderColor: '#fff',
												fontWeight: 'bold',
												marginTop: 10,
											}}
										>
											Tim
										</Divider>
										<p
											style={{
												textAlign: 'center',
												color: '#fff',
												fontWeight: 'bold',
											}}
										>
											Co-founder and the technical manager of Squat Panda. Full
											Stack developer in Web, Mobile and blockchain aspect. I
											believe blockchain can change the world.
										</p>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className="roadmap-container" justify='center' gutter={[0, 24]} style={{ marginTop: 24 }}>
					<Col xs={22} md={14}>
						<Row justify='space-between'>
							<Col xs={24} md={10} className="roadmap-section item-3">
								<Row justify='center' gutter={[0, 24]}>
									<Col xs={12} md={16}>
										<img
											src='/team_3.png'
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'contain',
											}}
										/>
									</Col>
								</Row>
								<Row justify="center">
									<Col xs={16} md={24}>
										<Divider
											style={{
												textAlign: 'center',
												color: '#fff',
												borderColor: '#fff',
												fontWeight: 'bold',
												marginTop: 10,
											}}
										>
											XXX
										</Divider>
										<p
											style={{
												textAlign: 'center',
												color: '#fff',
												fontWeight: 'bold',
											}}
										>
											Co-founder and the technical manager of Squat Panda. Full
											Stack developer in Web, Mobile and blockchain aspect. I
											believe blockchain can change the world.
										</p>
									</Col>
								</Row>
							</Col>
							<Col xs={24} md={10} className="roadmap-section item-4">
								<Row justify='center' gutter={[0, 24]}>
									<Col xs={12} md={16}>
										<img
											src='/team_2.png'
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'contain',
											}}
										/>
									</Col>
								</Row>
								<Row justify="center">
									<Col xs={16} md={24}>
										<Divider
											style={{
												textAlign: 'center',
												color: '#fff',
												borderColor: '#fff',
												fontWeight: 'bold',
												marginTop: 10,
											}}
										>
											Tim
										</Divider>
										<p
											style={{
												textAlign: 'center',
												color: '#fff',
												fontWeight: 'bold',
											}}
										>
											Co-founder and the technical manager of Squat Panda. Full
											Stack developer in Web, Mobile and blockchain aspect. I
											believe blockchain can change the world.
										</p>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default Team;
