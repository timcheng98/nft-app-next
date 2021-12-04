import React, { useEffect, useRef } from 'react';
import { Row, Col, Divider } from 'antd';
import defaultStyles from '../core/theme/styles';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import _ from 'lodash'
gsap.registerPlugin(ScrollTrigger);
const RoadMap = () => {
	// wait until DOM has been rendered
	useEffect(() => {
		gsap.utils.toArray(".container").forEach((container) => {
			const sections = container.querySelectorAll(".section");
			let tl = gsap.timeline({
				// yes, we can add it to an entire timeline!
				scrollTrigger: {
					trigger: container,
					pin: true,   // pin the trigger element while active,
					// toggleActions: "play none none reverse",
					start: "top-=150px top", // when the top of the trigger hits the top of the viewport
					// end: "+=4000", // end after scrolling 500px beyond the start
					scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
					snap: {
						snapTo: "labels", // snap to the closest label in the timeline
						duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
						delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
						ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
					},
					markers: false
				}
			});

			tl.addLabel("start")
			_.map(sections, (item) => {
				return tl.from(item, { opacity: 0, duration: 3, y: 100 })
			})

		});
	}, []);

	return (
		<Row  justify='center' className="row" style={{ backgroundColor: '#fff' }}>
			<Col span={20}>
				<Row>
					<Col xs={24} md={10} >
<Row className="container">
	<Col span={24} className="section">
	<h1
							
							id="id"
							style={{
								color: 'rgb(109, 40, 217)',
								fontSize: 48,
								// marginTop: 30,
								fontWeight: '600',
								textAlign: 'center',
							}}
						>
							Roadmap
						</h1>
	</Col>
</Row>
					</Col>
					<Col xs={24} md={14}>
						<Row gutter={[0, 20]} className="container">
							<Col span={24} className="section q4-1">
								<h1
									style={{
										color: 'rgb(109, 40, 217)',
										fontSize: 32,
										// marginTop: 30,
										fontWeight: '600',
										// textAlign: 'center',
									}}
								>
									2021 Q4
								</h1>
							</Col>
							<Col
								className="section q4-2"
								span={24}
								style={{
									...defaultStyles.subHeader,
									color: 'green',
								}}
							>
								Launch of the first version of the squatpanda.online website.
								(Finished)
							</Col>
							<Col
								className="section q4-3"
								span={24}
								style={{
									...defaultStyles.subHeader,
									color: 'green',
								}}
							>
								Deploy Squat Panda smart contract on Polygon Network (Finished)
							</Col>
							<Col
								className="section q4-4"
								span={24}
								style={{
									...defaultStyles.subHeader,
									color: 'blue',
								}}
							>
								500 Airdrop Release (In Progress)
							</Col>
							<Col className="section q4-5"
								span={24} style={defaultStyles.subHeader}>
								Squat Panda NFT Pre-Sale
							</Col>
							<Col className="section q4-6"
								span={24} style={defaultStyles.subHeader}>
								Mint Squat Panda NFT
							</Col>
							<Col className="section q4-7"
								span={24} style={defaultStyles.subHeader}>
								Available on Opensea
							</Col>
							<Col className="section q4-8"
								span={24} style={defaultStyles.subHeader}>
								Donate 1% NFT revenue to World Wide Fund for Nature (WWF)
							</Col>
						</Row>
						<Row gutter={[0, 20]} className="container">
							<Col span={24}>
								{/* <Divider /> */}
								<h1
									className="section q4-1"
									style={{
										color: 'rgb(109, 40, 217)',
										fontSize: 32,
										// marginTop: 30,
										fontWeight: '600',
										// textAlign: 'center',
									}}
								>
									2022 Q1
								</h1>
							</Col>
							<Col className="section q4-2" span={24} style={defaultStyles.subHeader}>
								Design and sale of Squat Panda merchandise
							</Col>
							<Col className="section q4-3" span={24} style={defaultStyles.subHeader}>
								Donate 1% sale revenue to animal charities worldwide
							</Col>
							<Col className="section q4-4" span={24} style={defaultStyles.subHeader}>
								Whitepaper - Finalization of the official Squat Panda
								whitepaper.
							</Col>
						</Row>
						<Row gutter={[0, 20]} className="container">
							<Col span={24}>
								{/* <Divider /> */}
								<h1
									className="section q2-1"
									style={{
										color: 'rgb(109, 40, 217)',
										fontSize: 32,
										// marginTop: 30,
										fontWeight: '600',
										// textAlign: 'center',
									}}
								>
									2022 Q2
								</h1>
							</Col>
							<Col
								className="section q2-2"
								span={24}
								style={{
									...defaultStyles.subHeader,
								}}
							>
								$SPD ERC20 Token launch
							</Col>
							<Col className="section q2-3" span={24} style={defaultStyles.subHeader}>
								Donate 1% token revenue to animal charities worldwide
							</Col>
							<Col className="section q2-4" span={24} style={defaultStyles.subHeader}>
								Plan to list $SPD ERC20 Token on DeFi
							</Col>
							<Col className="section q2-5" span={24} style={defaultStyles.subHeader}>
								Provide Liquidity Pool
							</Col>
						</Row>
						<Row gutter={[0, 20]} className="container">
							<Col span={24}>
								{/* <Divider /> */}


								<h1
									className="section q3-1"
									style={{
										color: 'rgb(109, 40, 217)',
										fontSize: 32,
										margin: '30px 0px',
										// marginTop: 30,
										fontWeight: '600',
										// textAlign: 'center',
									}}
								>
									And Much More...
								</h1>
								<div className="section" />
							</Col>
						</Row>

					</Col>
				</Row>
			</Col>
		</Row>
	);
};
export default RoadMap;
