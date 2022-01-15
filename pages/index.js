import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import Script from 'next/script'

const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { contact, openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<>
			<Script src="https://code.iconify.design/2/2.1.1/iconify.min.js" />

			<div>
				<SEO
					data={{
						title: "Aditya Mhatre",
						description:
							"A passionate Full Stack Web Developer and Mobile App Developer.",
						image: "https://avatars.githubusercontent.com/u/13261128?v=4",
						url: "https://adityamhatre.com",
						keywords: [
							"Aditya",
							"Aditya Mhatre",
							"@adityamhatre",
							"aditya-mhatre",
							"Portfolio",
							"Aditya Portfolio ",
							"Aditya Mhatre Portfolio",
							"web developer",
							"full stack",
							"full stack web developer",
							"mobile app developer",
							"android developer",
							"django",
							"flask",
							"django rest framework",
							"nodejs ",
							"expressjs",
							"reactjs ",
							"contextapi",
							"redux",
							"flutter",
							"springboot",
							"java"
						],
					}}
				/>
				<Navigation />
				<Greetings />
				<Skills />
				<Proficiency />
				<Education />
				<Experience />
				<Feedbacks />
				<Projects />
				<GithubProfileCard prof={githubProfileData} />
			</div>
		</>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());
	return {
		props: { githubProfileData: { ...githubProfileData, location: contact.location } },
	};
}
