import React from "react";
import { firebase } from "../configuration/firebase";


export default class SignupScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            confpassword: "",
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

    signup = (e) => {
        e.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        let confpassword = this.state.confpassword;
        
        if (!email || !password || !confpassword) {
            return alert("[Error] You either forgot to input your email or password or confirmation password. Please fill our all fields before continuing.");
        }

        if (confpassword !== password) {
            return alert("[Error] Your confirmation password dosen't match your password, please double check spelling.")
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
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
            <div className="signup">
                <p>Signup Screen</p>
                <div className="error">
                    { this.state.error ? <p>{this.state.error}</p> : null }
                </div>
                <form onSubmit={(e) => this.signup(e)}>
                    <input type="email" placeholder="Enter your email..." onChange={(e) => this.setState({ email: e.target.value })} /> <br></br>
                    <input type="password" placeholder="Enter your password..." onChange={(e) => this.setState({ password: e.target.value })} /><br></br>
                    <input type="password" placeholder="Confirm your password..." onChange={(e) => this.setState({ confpassword: e.target.value })} /><br></br>
                    <input type="submit" value="Signup" />
                </form>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        );
    }
}