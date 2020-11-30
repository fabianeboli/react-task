import React from "react";
import { IBook } from "../../Interfaces";

const Book = ({
	id,
	title,
	author,
	cover_url,
	pages,
	price,
	currency,
}: IBook) => {
	return (
		<div>
			<h2>{title}</h2>
			<img src={cover_url} alt={`cover of ${title}`} />
			<h4>Autor: {author}</h4>
			<h6>Ilość stron: {pages}</h6>
			<h3>
				Cena: {price}
				{currency}
			</h3>
		</div>
	);
};

export default Book;
