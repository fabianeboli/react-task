import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IBook } from "../../Interfaces";

const OrderForm = () => {
	const books: any = useSelector((state) => state);
	const [firstName, setFirstName] = useState<string>();
	const [lastName, setLastName] = useState<string>();
	const [city, setCity] = useState<string>();
	const [zipCode, setZipCode] = useState<string>();

	const order = () => {
		const booksId = books.map((book: IBook) => book.id);
		const quantity = booksId.reduce(
			(acc: any, e: number) => acc.set(e, (acc.get(e) || 0) + 1),
			new Map()
		);
		console.log(quantity);
	};

	return (
		<div>
			<form>
				<input
					type="text"
					placeholder="Imię"
					name="firstName"
					required
					value={firstName}
					onChange={({ target }) => setFirstName(target.value)}
				/>
				<input
					type="text"
					placeholder="Nazwisko"
					name="lastName"
					required
					value={lastName}
					onChange={({ target }) => setLastName(target.value)}
				/>
				<input
					type="text"
					placeholder="Miejscowość"
					name="City"
					required
					value={city}
					onChange={({ target }) => setCity(target.value)}
				/>
				<input
					type="text"
					placeholder="Kod Pocztowy"
					name="zipCode"
					required
					value={zipCode}
					onChange={({ target }) => setZipCode(target.value)}
				/>
				{/* <button oncClick={order}>Zamawiam i płacę</button> */}
			</form>
		</div>
	);
};

export default OrderForm;
