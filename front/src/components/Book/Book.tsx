import React from "react";
import { IBook, IisInCartPage } from "../../Interfaces";
import { useDispatch } from "react-redux";
import { addBookToCart } from "../../reducers/cart";
import "./Book.sass";

const Book = ({
	id,
	title,
	author,
	cover_url,
	pages,
	price,
	currency,
	isInCartPage,
}: IBook & IisInCartPage) => {
	const dispatch = useDispatch();

	return (
		<div className="Book__container">
			<img
				className="Book__container-image"
				src={cover_url}
				alt={`okładka ${title}`}
			/>
			<div>
				<h2 className="Book__container-title">{title}</h2>
				<p className="Book__container-author">Autor: {author} </p>
				<p className="Book__container-pages">Ilość stron: {pages} </p>
				<h3>
					<p>
						Cena: {price}
						{currency}
						{!isInCartPage && (
							<button
								className="Book__container-button"
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
						)}
					</p>
				</h3>
			</div>
		</div>
	);
};

export default Book;
