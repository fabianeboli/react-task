import React, { useEffect, useState } from "react";
import Book from "../components/Book/Book";
import { IBook } from "../Interfaces";
import fetchService from "../services/fetchService";
import { Link } from "react-router-dom";

const Main = () => {
	const [books, setBooks] = useState<{ data: IBook[] }>();

	useEffect(() => {
		const fetchBooks = async () => {
			setBooks(await fetchService.getAllBooks());
		};
		fetchBooks();
	}, []);

	return (
		<div>
			Books
			{books?.data.map((book: IBook) => (
				<>
					<Book
						key={book.id}
						id={book.id}
						title={book.title}
						author={book.author}
						cover_url={book.cover_url}
						pages={book.pages}
						price={book.price}
						currency={book.currency}
					/>
				</>
			))}
			<Link to="/cart">
				<button>Przejdź do koszyka</button>
			</Link>
		</div>
	);
};

export default Main;
