import React, {Component} from 'react';
import Item from "./TodoItem"

class TodoList extends Component {
    render() {
        return (
            <div>
                <h1> hello from To list</h1>
                <Item/>
            </div>
        );
    }
}

export default TodoList;