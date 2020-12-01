import { IBook } from "./../Interfaces.d";
enum actTypes {
	addToCart = "ADD_TO_CART",
}

const initialState: IBook[] = [];

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case actTypes.addToCart:
			return [...state, action.book];
		default:
			return state;
	}
};

export const addBookToCart = (book: IBook) => {
	return {
		type: actTypes.addToCart,
		book,
	};
};

export default reducer;
