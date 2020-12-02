import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IBook, IOrder } from "../../Interfaces";
import { flushCart } from "../../reducers/cart";
import fetchService from "../../services/fetchService";
import "./OrderForm.sass";

type MouseEvent = React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;

const OrderForm = () => {
	const books: any = useSelector((state) => state);
	const dispatch = useDispatch();

	const [firstName, setFirstName] = useState<string>("");
	const [lastName, setLastName] = useState<string>("");
	const [city, setCity] = useState<string>("");
	const [zipCodePrefix, setZipCodePrefix] = useState<string>("");
	const [zipCodePostfix, setZipCodePostFix] = useState<string>("");
	const [error, setError] = useState<string[]>([]);

	const handleOrder = (event: MouseEvent) => {
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

		const zipCode = zipCodePrefix.concat("-", zipCodePostfix);

		validate() &&
			fetchService.postOrder(orders, {
				firstName,
				lastName,
				zipCode,
				city,
			}) && emptyState();
	};

	const validate = (): boolean => {
		let isError: boolean = false;
		const namePattern = /[a-z-]{2,}/i;
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

		if (!zipCodePattern.test(zipCodePrefix.concat(zipCodePostfix))) {
			setError((state) => [
				...state,
				"Kod pocztowy musi łącznie zawierać 5 cyfr.",
			]);
			isError = true;
		}

		return isError ? false : true;
	};

	const emptyState = () => {
		setFirstName("");
		setLastName("");
		setCity("");
		setZipCodePrefix("");
		setZipCodePostFix("");
		dispatch(flushCart());
	};

	return (
		<div>
			{error.length > 0 && (
				<ul className="Order__Error-Container">
					{error.map((err: string) => (
						<li>{err}</li>
					))}
				</ul>
			)}

			<form>
				<div className="Order__Container">
					<input
						className="Order__Container-InputName"
						type="text"
						placeholder="Imię"
						name="firstName"
						minLength={2}
						required
						value={firstName}
						onChange={({ target }) => setFirstName(target.value)}
					/>
					<input
						className="Order__Container-InputName"
						type="text"
						placeholder="Nazwisko"
						name="lastName"
						minLength={2}
						required
						value={lastName}
						onChange={({ target }) => setLastName(target.value)}
					/>
					<input
						className="Order__Container-InputName"
						type="text"
						placeholder="Miejscowość"
						name="city"
						minLength={2}
						required
						value={city}
						onChange={({ target }) => setCity(target.value)}
					/>
					<div>
						<input
							className="Order__Container-InputName Order_Container-ZipCodePrefix"
							type="text"
							placeholder="00"
							name="zipCode"
							minLength={2}
							maxLength={2}
							required
							value={zipCodePrefix}
							onChange={({ target }) => setZipCodePrefix(target.value)}
						/>
						-
						<input
							className="Order__Container-InputName Order_Container-ZipCodePostfix"
							type="text"
							placeholder="Kod Pocztowy"
							name="zipCode"
							minLength={3}
							maxLength={3}
							required
							value={zipCodePostfix}
							onChange={({ target }) => setZipCodePostFix(target.value)}
						/>
					</div>
				</div>

				<button
					className="Order_Container-SubmitButton"
					type="submit"
					onClick={(event) => handleOrder(event)}
				>
					Zamawiam i płacę
				</button>
			</form>
		</div>
	);
};

export default OrderForm;
