import React, {Component} from 'react';
import Item from "./TodoItem"

class TodoList extends Component {
    render() {
        const {items,handleEdit,handleDelete,clearList}=this.props

        return (

                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center"> todo list</h3>
                    {items.map(item=>
                    {return (<Item
                            key={item.id}
                            title={item.title}
                            handleEdit={()=>handleEdit(item.id)}
                            handleDelete={()=>handleDelete(item.id)}/>
                    )})}
                    <button type="button"
                            onClick={clearList}
                            className="btn btn-danger btn-block text-uppercase mt-5"
                    >
                        clear Todo</button>
                </ul>



        );
    }
}

export default TodoList;