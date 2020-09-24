import React from "react";
import "./Home.css";
const Home = (props) => {
    return(

        <div className="Home"> 
                <h2>HOME </h2>
                <p>Hello {props.user}</p>
        </div>
    )
}

export default Home;