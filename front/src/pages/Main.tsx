import React, { useEffect, useState } from "react";
import Book from "../components/Book/Book";
import { IBook } from "../Interfaces";
import fetchService from "../services/fetchService";
import { Link } from "react-router-dom";
import "./Main.sass";
import { useSelector } from "react-redux";

const Main = () => {
	const [books, setBooks] = useState<{ data: IBook[] }>();
	const booksInCart: any = useSelector(state => state);

	useEffect(() => {
		const fetchBooks = async () => {
			setBooks(await fetchService.getAllBooks());
		};
		fetchBooks();
	}, []);

	return (
		<div>
			<Link to="/cart">
				<button className="Book__container-linkToCart" disabled={booksInCart.length === 0 ? true : false}>
					Przejdź do koszyka
				</button>
			</Link>
			{books?.data.map((book: IBook) => (
				<>
					<Book
						key={book.id}
						id={book.id}
						title={book.title}
						author={book.author}
						cover_url={book.cover_url}
						pages={book.pages}
						price={book.price / 100}
						currency={book.currency}
						isInCartPage={false}
					/>
				</>
			))}
		</div>
	);
};

export default Main;
