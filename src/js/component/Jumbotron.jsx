import React from "react";

let jumbotron = () => {
	return (
		<div class="container py-4">
			<div class="p-5 mb-4 bg-light rounded-3">
				<div class="container-fluid py-5">
					<h1 class="display-5 fw-bold">A Warm Welcome!</h1>
					<p class="col-md-8 fs-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<button class="btn btn-primary btn-lg" type="button">
						Call to action!
					</button>
				</div>
			</div>
		</div>
	);
};

export default jumbotron;
