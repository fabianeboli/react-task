import React from "react";

const Navbar = (pageName: string) => {
	return (
		<div className="container">
			<h2>{pageName}</h2>
		</div>
	);
};

export default Navbar;
