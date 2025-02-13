import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardHeader,
	Col,
} from "reactstrap";

import Color from "color-thief-react";

import { motion } from "framer-motion";
import Image from "next/image";

const ExperienceCard = ({ data }) => {
	const navigateToCompany = () => window.open(data.companyLink, "_blank");

	return (
		<Col lg="6">
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				<Card
					style={{ flex: 1, marginBottom: "1rem" }}
					className="shadow-lg--hover shadow border-0 text-center rounded"
				>
					<Color src={data.companylogo} format="hex">
						{(color) => (
							<CardHeader style={{ background: color.data }}>
								<h5 onClick={navigateToCompany} className="text-white pointer" >{data.company}</h5>
							</CardHeader>
						)}
					</Color>
					<CardBody className="py-5">
						<div
							className="bg-white rounded-circle mb-3 img-center img-fluid shadow-lg "
							style={{ width: "100px", height: "100px" }}
						>
							<Image
								onClick={navigateToCompany}
								unoptimized={true}
								src={data.companylogo}
								width={100}
								height={100}
								className="image-75 pointer"
								alt={data.companylogo}
							/>
						</div>
						<CardTitle tag="h5">{data.role}</CardTitle>
						<CardSubtitle>{data.date}</CardSubtitle>
						<CardText className="description my-3 text-left">
							{data.desc}
							<ul>
								{data.descBullets
									? data.descBullets.map((desc) => {
										return <li key={desc}>{desc}</li>;
									})
									: null}
							</ul>
						</CardText>
					</CardBody>
				</Card>
			</motion.div>
		</Col>
	);
};

export default ExperienceCard;
