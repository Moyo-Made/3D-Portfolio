import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
	return (
		<footer>
			<h2>
				<a href="#header">MTB</a>
			</h2>

			<ul className="permalinks">
				<li>
					<a href="#header">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a
					href="https://www.linkedin.com/in/moyomade-adegbite/"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin />
				</a>
				<a href="https://github.com/Moyo-Made" target="_blank" rel="noreferrer">
					<BsGithub />
				</a>
				<a
					href="https://twitter.com/moyomadee7"
					target="_blank"
					rel="noreferrer"
				>
					<FaTwitter />
				</a>
				<a
					href="https://web.facebook.com/moyomade.adegbite.malz.10"
					target="_blank"
					rel="noreferrer"
				>
					<BsFacebook />
				</a>
				<a
					href="https://instagram.com/made.techboy?igshid=YmMyMTA2M2Y="
					target="_blank"
					rel="noreferrer"
				>
					<BsInstagram />
				</a>
			</div>

			<div className="footer__copyright">
				<small>&copy; madev. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
