import React from "react";
import { firebase } from "../configuration/firebase";


export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }
    
    componentWillMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.history.push("/home");
            }
        });
    }

    login = (e) => {
        e.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        
        if (!email || !password) {
            return alert("[Error] You either forgot to input your email or password. Please fill our all fields before continuing.");
        }

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            this.props.history.push("/home");
        })
        .catch(error => {
            this.setState({
                error: error.message
            });
        });
    }

    render = () => {
        return (
            <div className="login">
                <p>Login</p>
                <div className="error">
                    { this.state.error ? <p>{this.state.error}</p> : null }
                </div>
                <form onSubmit={(e) => this.login(e)}>
                    <input type="email" placeholder="Enter your email..." onChange={(e) => this.setState({ email: e.target.value })} /> <br></br>
                    <input type="password" placeholder="Enter your password..." onChange={(e) => this.setState({ password: e.target.value })} /><br></br>
                    <input type="submit" value="Login" />
                </form>
                <p>Don't have an account? <a href="/signup">Signup</a></p>
            </div>
        );
    }
}