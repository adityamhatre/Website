import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import Link from "next/link";
import {
	UncontrolledCollapse,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
} from "reactstrap";

const Navigation = () => {
	const [collapseClasses, setCollapseClasses] = useState("");
	const [theme, setTheme] = useState("light");
	const onExiting = () => setCollapseClasses("collapsing-out");

	const onExited = () => setCollapseClasses("");

	useEffect(() => {
		let headroom = new Headroom(document.getElementById("navbar-main"));
		// initialise
		headroom.init();

		// Detect the initial theme applied by the document head script
		const isDarkTheme = document.documentElement.classList.contains("dark-theme");
		setTheme(isDarkTheme ? "dark" : "light");

		// Handle updates if system settings change, only if user hasn't overridden
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = (e) => {
			if (!localStorage.getItem("theme")) {
				const systemTheme = e.matches ? "dark" : "light";
				if (systemTheme === "dark") {
					document.documentElement.classList.add("dark-theme");
				} else {
					document.documentElement.classList.remove("dark-theme");
				}
				setTheme(systemTheme);
			}
		};
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	const toggleTheme = () => {
		const nextTheme = theme === "dark" ? "light" : "dark";
		if (nextTheme === "dark") {
			document.documentElement.classList.add("dark-theme");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark-theme");
			localStorage.setItem("theme", "light");
		}
		setTheme(nextTheme);
	};

	return (
		<>
			<header className="header-global">
				<Navbar
					className="navbar-main navbar-transparent navbar-light headroom"
					expand="lg"
					id="navbar-main"
				>
					<Container>
						<NavbarBrand href="/" className="mr-lg-5">
							<h2 className="text-white" id="nav-title">
								{greetings.name}
							</h2>
						</NavbarBrand>
						<button
							className="navbar-toggler"
							aria-label="navbar_toggle"
							id="navbar_global"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<UncontrolledCollapse
							toggler="#navbar_global"
							navbar
							className={collapseClasses}
							onExiting={onExiting}
							onExited={onExited}
						>
							<div className="navbar-collapse-header">
								<Row>
									<Col className="collapse-brand" xs="6">
										<h3
											className="text-black"
											id="nav-title"
										>
											{greetings.name}
										</h3>
									</Col>
									<Col className="collapse-close" xs="6">
										<button
											className="navbar-toggler"
											id="navbar_global"
										>
											<span />
											<span />
										</button>
									</Col>
								</Row>
							</div>
							<Nav
								className="align-items-lg-center ml-lg-auto"
								navbar
							>
								{socialLinks.facebook && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Facebook"
											className="nav-link-icon"
											href={socialLinks.facebook}
											target="_blank"
										>
											<i className="fa fa-facebook-square" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Facebook
											</span>
										</NavLink>
									</NavItem>
								)}
								{socialLinks.instagram && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Instagram"
											className="nav-link-icon"
											href={socialLinks.instagram}
											target="_blank"
										>
											<i className="fa fa-instagram" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Instagram
											</span>
										</NavLink>
									</NavItem>
								)}
								{socialLinks.twitter && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Twitter"
											className="nav-link-icon"
											href={socialLinks.twitter}
											target="_blank"
										>
											<i className="fa fa-twitter-square" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Twitter
											</span>
										</NavLink>
									</NavItem>
								)}
								{socialLinks.github && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Github"
											className="nav-link-icon"
											href={socialLinks.github}
											target="_blank"
										>
											<i className="fa fa-github" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Github
											</span>
										</NavLink>
									</NavItem>
								)}
								{socialLinks.linkedin && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Linkedin"
											className="nav-link-icon"
											href={socialLinks.linkedin}
											target="_blank"
										>
											<i className="fa fa-linkedin" />
											<span className="nav-link-inner--text d-lg-none ml-2">
												Linkedin
											</span>
										</NavLink>
									</NavItem>
								)}
								<NavItem>
									<NavLink
										rel="noopener"
										aria-label="Toggle Theme"
										className="nav-link-icon"
										style={{ cursor: "pointer" }}
										onClick={toggleTheme}
									>
										<i className={theme === "dark" ? "fa fa-sun" : "fa fa-moon-o"} />
										<span className="nav-link-inner--text d-lg-none ml-2">
											{theme === "dark" ? "Light Mode" : "Dark Mode"}
										</span>
									</NavLink>
								</NavItem>
							</Nav>
						</UncontrolledCollapse>
					</Container>
				</Navbar>
			</header>
		</>
	);
};

export default Navigation;
