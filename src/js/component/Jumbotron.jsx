import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
	return (
		<div class="container py-4">
			<div class="p-5 mb-4 bg-light rounded-3">
				<div class="container-fluid py-5">
					<h1 class="display-5 fw-bold">{props.title}</h1>
					<p class="col-md-8 fs-4">{props.text}</p>
					<button class="btn btn-primary btn-lg" type="button">
						{props.buttontext}
					</button>
				</div>
			</div>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	buttontext: PropTypes.string,
};
export default Jumbotron;
