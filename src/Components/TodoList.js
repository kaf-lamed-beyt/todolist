import React, { Component } from "react";

class TodoList extends Component {
    render() {
        return (
            <div className="todoListContainer">
                <div className="header">
                    <form>
                        <input placeholder="What do you wanna do?"></input>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;