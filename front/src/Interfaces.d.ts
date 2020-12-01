export interface IBook {
	id: number;
	title: string;
	author: string;
	cover_url: string;
	pages: number;
	price: number;
	currency: string;
}

export interface IOrder {
	id: number;
	quantity: number;
}

export interface IAddress {
	firstName: string;
	lastName: string;
	city: string;
	zipCode: string;

}