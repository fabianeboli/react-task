import React from "react";
import "./App.scss";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Order from "./pages/Order";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Router>
				<header className="App-header">
					<Switch>
						<Route exact path="/">
							<Navbar pageName="Książki" />
							<Main />
						</Route>
						<Route exact path="/cart">
							<Navbar pageName="Koszyk" />
							<Cart />
						</Route>
						<Route exact path="/order">
						<Navbar pageName="Zamówienie" />
							<Order />
						</Route>
						<Redirect to="/" />
					</Switch>
				</header>
			</Router>
		</div>
	);
}

export default App;
