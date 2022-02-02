import React from "react";
import Navbar from "./Nav.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./card.jsx";
import Footer from "./footer.jsx";


const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</>
	);
};

export default Home;
