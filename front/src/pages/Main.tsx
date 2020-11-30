import React, { useEffect, useState } from "react";
import Book from "../components/Books/Book";
import { IBook } from "../Interfaces";
import fetchService from "../services/fetchService";

const Main = () => {
	const [books, setBooks] = useState<{data: IBook[]}>();

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
				{console.log(book)}
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
		</div>
	);
};

export default Main;
