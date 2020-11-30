import React from "react";

const OrderForm = () => {
	return (
		<div>
			<form>
				<input type="text" placeholder="Imię" name="firstName" required />
				<input type="text" placeholder="Nazwisko" name="lastName" required />
				<input type="text" placeholder="Miejscowość" name="City" required />
				<input
					type="text"
					placeholder="Kod Pocztowy"
					name="boxOffice"
					required
				/>
			</form>
		</div>
	);
};

export default OrderForm;
