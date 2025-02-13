import React, { Fragment } from "react";

import { motion } from "framer-motion";
import DisplayLottie from "../components/DisplayLottie";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

import { skillsSection } from "../portfolio";
import { useState, useEffect } from "react";
const Skills = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}>
			<Container className="text-center my-5 section section-lg">
				<h1 className="h1">{skillsSection.title}</h1>
				<p className="lead">{skillsSection.subTitle}</p>
				<Row>
					<Col lg="6">
						<DisplayLottie animationPath="/lottie/webdev.json" />
					</Col>
					<Col lg="6">
						<div className="d-flex justify-content-center flex-wrap mb-5">
							{skillsSection.softwareSkills.map((skill) => {
								return (
									<Fragment key={skill.skillName}>
										<div
											className="icon icon-lg icon-shape shadow rounded-circle mb-5"
											id={skill.skillName}
										>
											<span
												className="iconify"
												data-icon={
													skill.fontAwesomeClassname
												}
												data-inline="false"
											></span>
										</div>
										<UncontrolledTooltip
											delay={0}
											placement="bottom"
											target={skill.skillName}
										>
											{skill.skillName}
										</UncontrolledTooltip>
									</Fragment>
								);
							})}
						</div>
						<div>
							{skillsSection.skills.map((skill) => {
								return <p key={skill}>{skill}</p>;
							})}
						</div>
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
};

export default Skills;
