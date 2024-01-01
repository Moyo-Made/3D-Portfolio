import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
	return (
		<div className="header_socials">
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
		</div>
	);
};

export default HeaderSocials;
