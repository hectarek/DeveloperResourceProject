import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';
import "../style/style.css";

import Nav from "./Nav";

import Home from "./Home";
import Resources from "./Resources";
import About from "./About";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />

				<Switch>
					<Route path="/home" render={() => <Home/>} />
					<Route path="/resources" render={() => <Resources/>} />
					<Route path="/about" render={() => <About/>} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
