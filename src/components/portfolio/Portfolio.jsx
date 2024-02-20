import React from "react";
import "./portfolio.css";
import IMG1 from "../../images/madev.PNG";
import IMG2 from "../../images/redstore.PNG";
import IMG3 from "../../images/chat.PNG";
import IMG4 from "../../images/real estate.PNG";
import IMG5 from "../../images/weather.PNG";
import IMG6 from "../../images/sushi.PNG"

const data = [
	{
		id: 6,
		image: IMG6,
		title: "Sushi Website: React and Tailwind CSS",
		desc: "Step into a sushi lover's dream! This website, made with React, showcases delicious sushi options. Dive in, explore our menu, and enjoy a smooth website experience. Take a look in my portfolio to see it live! 🍣🖥️",
		github: "https://github.com/Moyo-Made/REAL-ESTATE-WEBSITE",
		demo: "https://real-estate-websitee.netlify.app/",
	},
	{
		id: 4,
		image: IMG4,
		title: "🏡 Real Estate Website: React-Powered Perfection!",
		desc: "A sleek real estate website built with React. 🚀 Explore listings effortlessly, enjoy interactive maps, and experience a seamless UI. Check it out live in my portfolio! 💼",
		github: "https://github.com/Moyo-Made/REAL-ESTATE-WEBSITE",
		demo: "https://real-estate-websitee.netlify.app/",
	},
	{
		id: 3,
		image: IMG3,
		desc: "A chat app using React and Firebase. 🚀 Enjoy real-time messaging, secure authentication, and a contemporary UI. Check it out live in my portfolio! 💼",
		title: "💬 Real-Time Chat App: React & Firebase Elegance",
		github: "https://github.com/Moyo-Made/CHAT-APP",
		demo: "https://meetup7.netlify.app",
	},
	{
		id: 1,
		image: IMG1,
		title: "🌐 Portfolio Showcase: Crafted with React Brilliance!",
		desc: "Proudly presenting my portfolio website built with React! 🚀 Dive into a seamless browsing experience, sleek design, and discover more about my skills. Explore now!",
		github: "https://github.com/Moyo-Made/3D-Portfolio",
		demo: "https://madev.netlify.app",
	},
	{
		id: 5,
		image: IMG5,
		title: "🌦️ Weather App: HTML, CSS, JS Magic!",
		desc: "A weather app built with HTML, CSS, and JavaScript. 🌟 Get real-time weather updates with a clean and intuitive interface. Experience it now!",
		github: "https://github.com/Moyo-Made/Weather-Application",
		demo: "https://weather-app-dyvu.vercel.app/",
	},

	{
		id: 2,
		image: IMG2,
		title: "🛍️ Ecommerce Delight: HTML, CSS, JS Wonders!",
		desc: " An ecommerce website crafted with HTML, CSS, and JavaScript. 🚀 Explore seamless shopping, captivating design, and a user-friendly experience. Check it out live in my portfolio! 💼",
		github: "https://github.com/Moyo-Made/E-commerce-website",
		demo: "https://e-commerce-website-moyo-made.vercel.app/",
	},
];

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
