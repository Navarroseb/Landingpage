import React from "react";
import img1 from "../../img/hillman-7.jpg";
import img2 from "../../img/daniele-barresi-food-carving-3.jpg";
import img3 from "../../img/Ingredients2019.jpg";
import img4 from "../../img/Obra-de-Adam-Hillman-5-1024x1024.jpg";

let card = () => {
	return (
		<div className="row display-flex text-center">
			<div className="col">
				<div className="card">
					<img src={img1} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a
							href="https://www.instagram.com/witenry/"
							className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img src={img2} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a
							href="https://www.instagram.com/danielebarresi_artist/"
							className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img src={img3} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="card">
					<img src={img4} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a
							href="https://www.instagram.com/witenry/"
							className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default card;
