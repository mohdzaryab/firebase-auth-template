import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import LoadingScreen from "./Screens/LoadingScreen";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="main">
                    <Switch>
                        <Route path="/" component={LoadingScreen} exact />
                        <Route path="/home" component={HomeScreen} />
                        <Route path="/login" component={LoginScreen} />
                        <Route path="/signup" component={SignupScreen} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
