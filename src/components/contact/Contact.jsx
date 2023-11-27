import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<AiOutlineMail className="contact__option-icon" />
						<h3>Email</h3>
						<h4>adegbitemoyomade2004@gmail.com</h4>
					</article>

					<article className="contact__option">
						<FaTwitter className="contact__option-icon" />
						<h3>Twitter</h3>
						<h4>moyomadee7</h4>
					</article>

					<article className="contact__option">
						<BsInstagram className="contact__option-icon" />
						<h3>Instagram</h3>
						<h4>maverick__007</h4>
					</article>

					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h3>Whatsapp</h3>
						<h4>+2348100566962</h4>
					</article>
				</div>
			</div>
		</section>
	);
};

export default Contact;
