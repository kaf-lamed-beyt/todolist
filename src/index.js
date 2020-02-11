import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./Components/TodoList";
import "./list-icon.png";

let destination = document.getElementById("container");

ReactDOM.render(
    <div>
        <TodoList />
    </div>,
    destination
);