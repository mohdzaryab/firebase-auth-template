import React from "react";
import { firebase } from "../configuration/firebase";
import Home from "../Components/Home/Home";


export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    componentWillMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.props.history.push("/login");
            } else {
                this.setState({
                    user: firebase.auth().currentUser
                });
            }
        });
    }

    render = () => {
        return (
            <div className="home">
                <Home user={this.state.user.email}></Home>
                
                <button onClick={() => firebase.auth().signOut()}>Logout</button>
            </div>
        );
    }
}