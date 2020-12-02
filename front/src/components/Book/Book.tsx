import React from "react";
import { IBook } from "../../Interfaces";
import { useDispatch } from "react-redux";
import { addBookToCart } from "../../reducers/cart";

const Book = ({
	id,
	title,
	author,
	cover_url,
	pages,
	price,
	currency,
}: IBook) => {
	const dispatch = useDispatch();

	return (
		<div>
			<h2>{title}</h2>
			<img src={cover_url} alt={`okładka ${title}`} />
			<p>Autor: {author}</p>
			<p>Ilość stron: {pages}</p>
			<h3>
				<p>
					Cena: {price}
					{currency}
				</p>
			</h3>
			<button
				onClick={() =>
					dispatch(
						addBookToCart({
							id,
							title,
							author,
							cover_url,
							pages,
							price,
							currency,
						})
					)
				}
			>
				Dodaj do koszyka
			</button>
		</div>
	);
};

export default Book;
