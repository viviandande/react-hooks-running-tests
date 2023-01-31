import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}