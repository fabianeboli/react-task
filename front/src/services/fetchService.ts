import { IBook } from "./../Interfaces.d";
const baseUrl = "http://localhost:3001/api";

const getAllBooks = async () => {
	const response: Response = await fetch(`${baseUrl}/book`);
	return response.ok
		? await response.json()
		: alert(`Http-error: ${response.statusText}`);
};

const postOrder = async (book: IBook) => {
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify(book),
	};

	const response: Response = await fetch(`${baseUrl}/order`, options);
	const result = await response.json();

	console.log(`Zamówienie ${result}`);
};

export default { getAllBooks, postAll: postOrder };
