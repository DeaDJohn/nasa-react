import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/Home';
import PicDay from './components/PicDay';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/pic-of-day">
						<PicDay />
					</Route>
					{/* <Route path="/users">
						<Users />
					</Route> */}
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
