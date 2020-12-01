import reducer, { addBookToCart, flushCart } from "../reducers/cart";
import { IBook } from "./../Interfaces.d";

describe("Cart Reducer", () => {
	test("should return cart with a new book", () => {
		const state: IBook[] = [];

		const newBook: IBook = {
			id: 457,
			title: "Matematyka 1. Podręcznik. Zakres podstawowy",
			author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
			cover_url: "http://localhost:3001/static/cover/book/457.jpg",
			pages: 280,
			price: 3200,
			currency: "PLN",
		};

		const newState = reducer(state, addBookToCart(newBook));
		
		expect(newState).toHaveLength(1);
		expect(newState).toContainEqual(newBook);
	});

	test('should flush cart', () => {

		const book: IBook = {
			id: 457,
			title: "Matematyka 1. Podręcznik. Zakres podstawowy",
			author: "M. Karpiński, M. Dobrowolska, M. Braun, J. Lech",
			cover_url: "http://localhost:3001/static/cover/book/457.jpg",
			pages: 280,
			price: 3200,
			currency: "PLN",
		};
		
		const state: IBook[] = [book, book, book];

		const newState = reducer(state, flushCart());

		expect(newState).toHaveLength(0);
	})
	
});
