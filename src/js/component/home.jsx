import React from "react";
import Navbar from "./Nav.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./card.jsx";
import Footer from "./footer.jsx";
import PropTypes from "prop-types";
import propTypes from "prop-types";
import imagenes from "./imagenes.jsx";

const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron
				title="A Warm Welcome"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua."
				buttontext="Call to action!"
			/>

			<div className="row row-cols-sm-2 row-cols-md-3 g-3 mb-3 text-center">
				<div className="col-md-3">
					<Cards
						title="Card title"
						text="Some quick example text to build on the card title and make up the bulk of the card's content."
						buttontext="Go somewhere"
						src={imagenes[0]}
						href="https://www.instagram.com/witenry/"
					/>
				</div>
				<div className="col-md-3">
					<Cards
						title="Card title"
						text="Some quick example text to build on the card title and make up the bulk of the card's content."
						buttontext="Go somewhere"
						src={imagenes[1]}
						href="https://www.instagram.com/witenry/"
					/>
				</div>
				<div className="col-md-3">
					<Cards
						title="Card title"
						text="Some quick example text to build on the card title and make up the bulk of the card's content."
						buttontext="Go somewhere"
						src={imagenes[2]}
						href="https://www.instagram.com/witenry/"
					/>
				</div>
				<div className="col-md-3">
					<Cards
						title="Card title"
						text="Some quick example text to build on the card title and make up the bulk of the card's content."
						buttontext="Go somewhere"
						src={imagenes[3]}
						href="https://www.instagram.com/witenry/"
					/>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
