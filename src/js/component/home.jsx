import React from "react";
import Navbar from "./Nav.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./card.jsx";
import Footer from "./footer.jsx";
import PropTypes from "prop-types";
import propTypes from "prop-types";
import img1 from "../../img/hillman-7.jpg";
import img2 from "../../img/daniele-barresi-food-carving-3.jpg";
import img3 from "../../img/Ingredients2019.jpg";
import img4 from "../../img/Obra-de-Adam-Hillman-5-1024x1024.jpg";

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
						img={img1}
						href="https://www.instagram.com/witenry/"
					/>
				</div>
				<div className="col-md-3">
					<Cards
						title="Card title"
						text="Some quick example text to build on the card title and make up the bulk of the card's content."
						buttontext="Go somewhere"
						img={img2}
						href="https://www.instagram.com/witenry/"
					/>
				</div>
				<div className="col-md-3">
					<Cards
						title="Card title"
						text="Some quick example text to build on the card title and make up the bulk of the card's content."
						buttontext="Go somewhere"
						img={img3}
						href="https://www.instagram.com/witenry/"
					/>
				</div>
				<div className="col-md-3">
					<Cards
						title="Card title"
						text="Some quick example text to build on the card title and make up the bulk of the card's content."
						buttontext="Go somewhere"
						img={img4}
						href="https://www.instagram.com/witenry/"
					/>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
