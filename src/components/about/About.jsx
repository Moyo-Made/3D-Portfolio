import React from "react";
import "./about.css";
import ME from "../../images/aboutImg.JPG";
import { FaAward } from "react-icons/fa";
import { VscFolder } from "react-icons/vsc";

const About = () => {
	return (
		<section id="about">
			<div className="about__text">
				<h5>Get To Know</h5>
				<h2>About Me</h2>
			</div>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<active className="about__card">
							<FaAward className="about__icons" />
							<h4>Experience</h4>
							<small>2+ Year Working</small>
						</active>

						<active className="about__card">
							<VscFolder className="about__icons" />
							<h4>Projects</h4>
							<small>15+ completed</small>
						</active>
					</div>
					<p>
						I am a industrious and result-oriented software developer with
						strong foundational knowldge needed as a developer. I have great
						knowledge of HTML, CSS, JavaScript, React and Vue.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
