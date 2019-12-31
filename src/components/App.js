import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
 
import Login from './Login'


class App extends Component {
	render() {
		return (
			<Router>	
                <div className="App">
                   <Switch>
						<Route exact path="/register" component={null} />
						<Route exact path="/login" component={Login} />
						<Redirect from="/" to="login" />
					</Switch>     
                </div>
            </Router>
           
				
		);
	}
}
export default App;
