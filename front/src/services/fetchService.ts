import { IAddress, IOrder } from "./../Interfaces.d";
const baseUrl = "http://localhost:3001/api";

const getAllBooks = async () => {
	const response: Response = await fetch(`${baseUrl}/book`);
	return response.ok
		? await response.json()
		: alert(`Http-error: ${response.statusText}`);
};

const postOrder = async (order: IOrder[], address: IAddress) => {
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify({ order, address }),
	};

	const response: Response = await fetch(`${baseUrl}/order`, options);
	const result = await response.json();

	console.log(`Order ${result}`);
};

export default { getAllBooks, postOrder };
