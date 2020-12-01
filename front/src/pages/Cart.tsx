import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Book from "../components/Books/Book";
import { IBook } from "../Interfaces";

const Cart = () => {
	const books: any = useSelector((state) => state);
	return (
		<div>
			Twoje zamówienie
			{books.map((book: IBook) => (
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
			<Link to="/order">
				<button>Dalej</button>
			</Link>
		</div>
	);
};

export default Cart;
