import React from "react";
import "./portfolio.css";
import IMG6 from "../../images/sushi.PNG"
import IMG5 from "../../images/megaleague.PNG"
import IMG4 from "../../images/real estate.PNG"
import IMG3 from "../../images/chat.PNG"
import IMG2 from "../../images/redstore.PNG"
import IMG1 from "../../images/madev.PNG"

const data = [
	{
		id: 5,
		title: "MEGA LEAGUE: Vue.js",
		image: IMG5,
		desc: "I had the opportunity to collaborate closely with both the design and backend teams as a front-end developer on revamping the Mega League website using Vue.js. This collaborative effort successfully delivered the Mega League website, a company that unites high-school students globally to tackle social issues through technology.",
		github: "https://github.com/MEGA-Hackathon/kinect.megahack.tech",
		demo: "https://megahack.tech/"
	},
	{
		id: 6,
		image: IMG6,
		title: "Sushi Website: React and Tailwind CSS",
		desc: "Step into a sushi lover's dream! This website, made with React, showcases delicious sushi options. Dive in, explore our menu, and enjoy a smooth website experience. Take a look in my portfolio to see it live! 🍣🖥️",
		github: "https://github.com/Moyo-Made/SUSHI",
		demo: "https://getsushi.netlify.app/"
	},
	{
		id: 4,
		image: IMG4,
		title: "🏡 Real Estate Website: React-Powered Perfection!",
		desc: "A sleek real estate website built with React. 🚀 Explore listings effortlessly, enjoy interactive maps, and experience a seamless UI. Check it out live in my portfolio! 💼",
		github: "https://github.com/Moyo-Made/REAL-ESTATE-WEBSITE",
		demo: "https://real-estate-websitee.netlify.app/"
	},
	{
		id: 3,
		image: IMG3,
		desc: "A chat app using React and Firebase. 🚀 Enjoy real-time messaging, secure authentication, and a contemporary UI. Check it out live in my portfolio! 💼",
		title: "💬 Real-Time Chat App: React & Firebase",
		github: "https://github.com/Moyo-Made/CHAT-APP",
		demo: "https://meetup7.netlify.app"
	},
	{
		id: 1,
		image: IMG1,
		title: "🌐 Portfolio Showcase: Crafted with React Brilliance!",
		desc: "Proudly presenting my portfolio website built with React! 🚀 Dive into a seamless browsing experience, sleek design, and discover more about my skills. Explore now!",
		github: "https://github.com/Moyo-Made/3D-Portfolio",
		demo: "https://madev.netlify.app"
	},
	{
		id: 2,
		image: IMG2,
		title: "🛍️ Ecommerce Delight: HTML, CSS, JS Wonders!",
		desc: " An ecommerce website crafted with HTML, CSS, and JavaScript. 🚀 Explore seamless shopping, captivating design, and a user-friendly experience. Check it out live in my portfolio! 💼",
		github: "https://github.com/Moyo-Made/E-commerce-website",
		demo: "https://e-commerce-website-moyo-made.vercel.app/"
	}
]

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{data.map(({ id, image, title, desc, github, demo }) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<span>{desc}</span>
							<div className="portfolio__item-cta">
								<a
									href={github}
									className="btn"
									target="_blank"
									rel="noreferrer"
								>
									Github
								</a>
								<a
									href={demo}
									className="btn btn-primary"
									target="_blank"
									rel="noreferrer"
								>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
