const baseUrl = "http://localhost:3001/api";

const getAllBooks = async () => {
	const response: Response = await fetch(`${baseUrl}/book`);
	return response.ok
		? await response.json()
		: alert(`Http-error: ${response.statusText}`);
};

const postAll = async () => {};

export default { getAllBooks, postAll };
