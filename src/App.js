import {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css"
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


class App extends Component {
    state = {
        items :[],
        id:uuidv4(),
        item:"",
        editItem:false
    }
    handleChange = (e) => {

            this.setState({item:e.target.value})


    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit")
        const newItem = {
            id:this.state.id,
            title:this.state.item
        };
        const updatedItem = [...this.state.items,newItem];
        this.setState({
            items:updatedItem,
            item:"",
            id:uuidv4(),
            editItem:false,

        },() =>console.log(this.state))


    }
    clearList = () => {
        console.log("clearlist")
    }
    handleDelete = (id) => {
        console.log(`handleDelete ${id}`)
    }
    handleEdit = (id) => {
        console.log(`handleEdit ${id}`)
    }
    render() {

        return (
            <div className="container">
                <div className="row" >
                    <div className="col-10 mx-auto col-md-8 mt-5">
                        <h3 className="text-center text-capitalize">
                            Todo Input
                        </h3>
                        <TodoInput
                            item={this.state.item}
                            editItem={this.state.editItem}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                        <TodoList
                            clearList={this.clearList}
                            items={this.state.items}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}

                        />
                    </div>

                </div>
            </div>


        );
    }
}

export default App;
