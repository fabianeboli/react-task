import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IBook, IOrder } from "../../Interfaces";
import fetchService from "../../services/fetchService";

type MouseEvent = React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;

const OrderForm = () => {
	const books: any = useSelector((state) => state);
	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [city, setCity] = useState<string>("");
	const [zipCode, setZipCode] = useState<string>("");
	const [error, setError] = useState<string[]>([]);

	const order = (event: MouseEvent) => {
		event.preventDefault();
		setError([]);
		const orders: IOrder[] = [];
		const booksId = books.map((book: IBook) => book.id);

		// transorm into map and count quantity
		const booksIntoMap = booksId.reduce(
			(acc: any, e: number) => acc.set(e, (acc.get(e) || 0) + 1),
			new Map()
		);

		// transform order into object
		booksIntoMap.forEach((value: number, key: number) => {
			orders.push({ id: key, quantity: value });
		});

		console.log(orders, { firstName, lastName, city, zipCode });
		validate() &&
			fetchService.postOrder(orders, { firstName, lastName, zipCode, city });
		emptyState();
	};

	const validate = (): boolean => {
		let isError: boolean = false;
		const namePattern = /\w{2,}/i;
		const zipCodePattern = /\d{5}/;

		if (
			!namePattern.test(firstName) ||
			!namePattern.test(lastName) ||
			!namePattern.test(city)
		) {
			setError((state) => [
				...state,
				"Imię, Nazwisko i miejscowość musi składać się z liter. Długość słowa musi być większa niż 2.",
			]);
			isError = true;
		}

		if (!zipCodePattern.test(zipCode)) {
			setError((state) => [...state, "Kod pocztowy musi zawierać 5 cyfr."]);
			isError = true;
		}

		return isError ? false : true;
	};

	const emptyState = () => {
		setFirstName("");
		setLastName("");
		setCity("");
		setZipCode("");
	};

	return (
		<div>
			<ul>
				{error.map((err: string) => (
					<li>{err}</li>
				))}
			</ul>
			<form>
				<input
					type="text"
					placeholder="Imię"
					name="firstName"
					minLength={2}
					required
					value={firstName}
					onChange={({ target }) => setFirstName(target.value)}
				/>
				<input
					type="text"
					placeholder="Nazwisko"
					name="lastName"
					minLength={2}
					required
					value={lastName}
					onChange={({ target }) => setLastName(target.value)}
				/>
				<input
					type="text"
					placeholder="Miejscowość"
					name="city"
					minLength={2}
					required
					value={city}
					onChange={({ target }) => setCity(target.value)}
				/>
				<input
					type="text"
					placeholder="Kod Pocztowy"
					name="zipCode"
					min={5}
					max={5}
					required
					value={zipCode}
					onChange={({ target }) => setZipCode(target.value)}
				/>
				<button onClick={(event) => order(event)}>Zamawiam i płacę</button>
			</form>
		</div>
	);
};

export default OrderForm;
