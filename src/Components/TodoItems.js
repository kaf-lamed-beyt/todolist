import React, { Component } from "react";

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks.bind(this)
    }
    delete(key) {
        this.props.delete(key)
    }
    createTasks(item) {
        return (
            <li onClick={() => this.delete(item.key)} 
                key={item.key}>{item.text}</li>
        )
    }

    render() {
        let entriesTodo = this.props.entries;
        let listItems = entriesTodo.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems;