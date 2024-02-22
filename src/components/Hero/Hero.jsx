import React from "react";
import "./Hero.css";
import CTA from "./CTA";
import HeaderImage from "../../images/IMG_8949.jpeg";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";

const Header = () => (
	<section id="header">
		<header>
			<div className="container header_container ">
				<h3>Hello I'm</h3>
				<motion.h1 animate={{ rotate: 360 }}>Moyomade</motion.h1>
				<h3>Frontend Developer</h3>
				<CTA />
				<HeaderSocials />

				<div className="hero_img">
					<img src={HeaderImage} style={{ height: 500 }} alt="me" />
				</div>
				<a href="#contact" className="scroll_down">
					Scroll Down
				</a>
			</div>
		</header>
	</section>
);

export default Header;
