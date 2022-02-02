import PropTypes from "prop-types";
import React from "react";

let card = (props) => {
	return (
		<div className="row">
			<div className="col">
				<div className="card">
					<img src={props.img} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">{props.text}</p>
						<a href={props.href} className="btn btn-primary">
							{props.buttontext}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

card.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	buttontext: PropTypes.string,
	img: PropTypes.string,
	href: PropTypes.string,
};

export default card;
