import React from "react";
import "./App.css";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Order from "./pages/Order";

function App() {
	return (
		<div className="App">
			<Router>
				<header className="App-header">
					<Switch>
						<Route exact path="/">
							<Main />
						</Route>
						<Route exact path="/cart">
							<Cart />
						</Route>
						<Route exact path="/order">
							<Order />
						</Route>
						<Redirect to="/"/>
					</Switch>
				</header>
			</Router>
		</div>
	);
}

export default App;
