import emoji from "react-easy-emoji";

export const greetings = {
	name: "Aditya Mhatre",
	title: "Hi all, I'm Aditya",
	description:
		"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with Java / Spring Boot / JavaScript / ReactJS / Angular / Nodejs / Python / Django and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
	resumeLink: "/resume.pdf",
};

export const openSource = {
	githubUserName: "adityamhatre",
};

export const contact = {
	location: 'Dallas, TX',
};

export const socialLinks = {
	facebook: "https://www.facebook.com/aditya.r.mhatre",
	instagram: "https://www.instagram.com/adityamhatre",
	twitter: "https://twitter.com/aditya_r_mhatre",
	github: "https://github.com/adityamhatre",
	linkedin: "https://www.linkedin.com/in/aditya-mhatre",
	email: "mailto:aditya.r.mhatre@gmail.com",
	medium: "https://medium.com/@aditya.r.mhatre"
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly efficient backend applications for any business domain"
		),
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Develop cross platform apps using Flutter"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: 'Java',
			fontAwesomeClassname: 'vscode-icons:file-type-java'
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "Spring-Boot",
			fontAwesomeClassname: "bx:bxl-spring-boot",
		},
		{
			skillName: "ReactJS",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "Angular",
			fontAwesomeClassname: "vscode-icons:file-type-angular",
		},
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "flutter",
			fontAwesomeClassname: "logos:flutter",
		},
		{
			skillName: "android",
			fontAwesomeClassname: "logos:android",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend", //Insert stack or technology you have experience in
		progressPercentage: "70", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Programming",
		progressPercentage: "90",
	},
];

export const educationInfo = [
	{
		schoolName: "The University of Texas at Arlington",
		subHeader: "Master of Science in Computer Science",
		duration: "August 2016 - May 2018",
		desc: "",
		descBullets: [
			"3.67 GPA",
			"Majored in AI, Software Engineering, and Databases",
		],
	},
	{
		schoolName: "University of Mumbai",
		subHeader: "Bachelor of Engineering in Computer Engineering",
		duration: "August 2012 - May 2016",
		desc: "",
		descBullets: [
			"7.67 GPA",
			"Majored in Computer Engineering and developed website for student council",
		],
	},
];

export const experience = [
	{
		role: "Senior Full Stack Engineer",
		company: "CBRE",
		companylogo: "/img/cbre.svg",
		date: "August 2021 – Present",
		desc: "Currently working as a Senior Full Stack Engineer at CBRE using the latest technologies.",
		descBullets: [
			"Undertaking the development of a new application for the company.",
			"Working on a team of 5 developers to migrate a monolith architectured web application to a modern microservice and micro UI architectured application.",
		],
		companyLink: "https://www.cbre.com/"
	},
	{
		role: "Senior Software Engineer",
		company: "Zimperium",
		companylogo: "/img/zimperium.png",
		date: "June 2018 – August 2021",
		desc: "First job out of university. Started as junior developer and worked my way to senior engineer.",
		descBullets: [
			"Learned and implemented new technologies such as ReactJS, AngularJS, Springboot, AWS, Docker, and more.",
			"Worked on a team of 5 developers to build a microservice architectured web application for the company.",
		],
		companyLink: "https://www.zimperium.com/"
	},
	{
		role: "Web Developer",
		company: "The University of Texas",
		companylogo: "/img/uta.png",
		date: "June 2017 - May 2018",
		desc: "Provisioned workflow for students to upload research papers for a lab journal online system",
		descBullets: [
			"Developed in a ReactJs frontend and NodeJS based backend app deployed on GCP",
			"Learned and implemented new technologies such as ReactJS, AngularJS, Springboot, GCP, Docker and more."
		],
		companyLink: "https://www.uta.edu/"
	}
];

export const projects = [
	{
		name: "Wordle Marathi Clone",
		desc: "A clone of the popular wordle app in Marathi language",
		link: "https://medium.com/@aditya.r.mhatre/wordle-in-%E0%A4%AE%E0%A4%B0%E0%A4%BE%E0%A4%A0%E0%A5%80-marathi-82ea2fa1bc03",
		storeLink: "https://shabdle.in",
		github: "https://github.com/adityamhatre/shabdle",
	},
	{
		name: "Auto-close tab timer",
		desc: "Automaticly closes the tab after a certain time",
		link: "https://medium.com/@aditya.r.mhatre/chrome-tab-auto-close-timer-86aa3ea101c9",
		github: "https://github.com/adityamhatre/tab-close-timer",
		storeLink: "https://chrome.google.com/webstore/detail/tab-close-timer/fjcngjmpebbfdjpndmlbfoldgiinpfcf/related?hl=en&authuser=0"
	},
	{
		name: "Solar System",
		desc: "A solar system artistic animation using p5.js",
		link: "https://adityamhatre.github.io/solar-system-colored/",
		github: "https://github.com/adityamhatre/solar-system-colored",
		youtube: "https://www.youtube.com/watch?v=Jqbyhhj9x3I",
	},
	{
		name: "Cross platform video calling",
		desc: "A video calling app that can be used on Android and iOS",
		link: "https://medium.com/@aditya.r.mhatre/cross-platform-video-calling-c1191a2b2cd8",
		github: "https://github.com/adityamhatre/flutter-video-call",
		youtube: "https://www.youtube.com/watch?v=0XqvL4EnoPM",
	},
	{
		name: "Magic Mirror",
		desc: "A mirror that displays time and weather info on it.",
		link: "https://medium.com/@aditya.r.mhatre/magic-mirror-e0f8b2da3a0f",
		github: "https://github.com/adityamhatre/Smart-Mirror",
		youtube: "https://www.youtube.com/watch?v=4lZw1ye6UKI",
	},
	{
		name: "Smart Door Lock",
		desc: "A smart door lock that can be used to lock and unlock the door.",
		link: "https://medium.com/@aditya.r.mhatre/diy-smart-doorlock-8f1180074b6d",
		github: "https://github.com/adityamhatre/KnobApi",
		youtube: "https://www.youtube.com/watch?v=1QKkKmiBLes",
	},
	{
		name: "Video game car controller",
		desc: "A car controller that can be used to control the car in a game using camera.",
		link: "https://medium.com/@aditya.r.mhatre/car-controller-for-games-using-opencv-1ba821d5fe4b",
		github: "https://github.com/adityamhatre/GameCarControl-CV",
		youtube: "https://www.youtube.com/watch?v=TXieQvzbTD8",
	},
	{
		name: "Self-driving car",
		desc: "A self-driving car that uses genetic algorithm to train itself.",
		github: "https://github.com/adityamhatre/self-drving-car-genetic",
		link: "https://medium.com/@aditya.r.mhatre/evolving-self-driving-cars-243b973dc984",
		youtube: "https://www.youtube.com/watch?v=ASY8dOwJcbk",
	},
];

export const feedbacks = [
	/*{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Aditya Mhatre has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose Aditya web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},*/
];
