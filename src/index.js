import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./Components/TodoList";

let destination = document.getElementById("container");

ReactDOM.render(
    <div>
        <TodoList />
    </div>,
    destination
);