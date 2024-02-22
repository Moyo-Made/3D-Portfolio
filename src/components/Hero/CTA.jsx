import React from "react";

const CTA = () => {
	return (
		<div className="cta">
			<a
				href="https://docs.google.com/document/d/11YH-aPEKmm3rbQxfOTMnYhHzzS0eyXsIfaNZn2pd3d0/edit?usp=sharing"
				className="btn btn-primary"
				target="_blank" rel="noreferrer"
			>
				Download CV
			</a>

			<a href="#contact" className="btn btn-primary">
				Let's Talk
			</a>
		</div>
	);
};

export default CTA;
