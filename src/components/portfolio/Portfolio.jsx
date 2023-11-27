import React from "react";
import "./portfolio.css";
import IMG2 from "../../images/redstore.PNG";
import IMG3 from "../../images/chat.PNG";
import IMG4 from "../../images/tindog.PNG";
import IMG5 from "../../images/weather.PNG";

const data = [
	{
		id: 3,
		image: IMG3,
		title: "Real Time Chat Application",
		github: "https://github.com/Moyo-Made/CHAT-APP",
		demo: "https://meetup7.netlify.app",
	},
	{
		id: 5,
		image: IMG5,
		title: "Weather App",
		github: "https://github.com/Moyo-Made/Weather-Application",
		demo: "https://weather-app-dyvu.vercel.app/",
	},

	{
		id: 2,
		image: IMG2,
		title: "E-commerce Website",
		github: "https://github.com/Moyo-Made/E-commerce-website",
		demo: "https://e-commerce-website-moyo-made.vercel.app/",
	},

	{
		id: 4,
		image: IMG4,
		title: "Tindog Website",
		github: "https://github.com/Moyo-Made/Tindogwebsite",
		demo: "https://tindogwebsite-orcin.vercel.app/",
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
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
