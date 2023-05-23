import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import INFO from "../data/user";
import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		document.title = `Contact | ${INFO.main.title}`;
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Ways to reach me
						</div>

						<div className="subtitle contact-subtitle">
						I would be delighted to connect with you! If you have any inquiries, 
						collaboration opportunities, or just want to say hello, feel free to 
						reach out to me through any pf the following platforms, instagram, twitter, github,
						 or connect with me on LinkedIn. I'm always excited to engage in
						  meaningful conversations about web development, share ideas, 
						  and explore potential collaborations. Don't hesitate to get in touch, 
						  and I'll be sure to respond as soon as possible. Let's connect 
						  and create something great together!
						</div>
					</div>

					<div className="contact-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
