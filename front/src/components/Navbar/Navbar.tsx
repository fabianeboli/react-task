import React from "react";
import { INavbar } from "../../Interfaces";
import "./Navbar.sass"


const Navbar = ({ pageName }: INavbar) => {
	return (
		<div className="Navbar__container ">
			<h6 className="Navbar__container-text">{pageName}</h6>
		</div>
	);
};

export default Navbar;
