import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";
import { useState, useEffect } from "react";

const Experience = () => {
	const [client, setClient] = useState(false);
	useEffect(() => {
		setClient(true);
	}, []);
	if (!client) {
		return null;
	}

	return (
		<section className="section section-lg">
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					<div className="d-flex p-4">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
								<i className="ni ni-briefcase-24 text-info" />
							</div>
						</div>
						<div className="pl-4">
							<h4 className="display-3 text-info">Experience</h4>
						</div>
					</div>
					<Row className="row-grid align-items-center flex-center row-gap-1">
						{experience.map((data, i) => {
							return <ExperienceCard key={i} data={data} />;
						})}
					</Row>
				</motion.div>
			</Container>
		</section>
	);
};

export default Experience;
