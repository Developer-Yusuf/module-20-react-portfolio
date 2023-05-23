import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		document.title = `Projects | ${INFO.main.title}`;
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Projects I have been working on
						</div>

						<div className="subtitle projects-subtitle">
							Here are some of the projects I have engaged in for quite some some time. I'm happy to share them
							with others.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
