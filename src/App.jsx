import React from "react";
import Hero from "./components/Hero/Hero";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
	return (
		<div className="grid">
			<Hero />
			<Nav />
			<About />
			<Experience />
			<Services />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
