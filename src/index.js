require("file-loader?name=[name].[ext]!./index.html"); //to include index.html in the final output
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";

const appElement = document.getElementById("app");

ReactDOM.render(<App />, appElement);
