import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "../style/style.css";

import Nav from "./Nav";

import Home from "./Home";
import Resources from "./Resources";
import About from "./About";

function App() {
	return (
    <Router>
      <div className="App">

      <Nav/>			

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/resources" component={Resources}/>
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
		
	);
}

export default App;
