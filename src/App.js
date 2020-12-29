import {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css"
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="row" >
                    <div className="col-10 mx-auto col-md-8 mt-5">
                        <h3 className="text-center text-capitalize">
                            Todo Input
                        </h3>
                        <TodoInput
                            handleChange={this.handleChange}
                            handleSumbit={this.handleSumbit}
                            editItem={this.state.editItem}
                            item={this.state.item}

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
