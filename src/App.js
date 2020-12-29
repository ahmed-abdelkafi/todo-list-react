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
        if(this.state.item.length>0)
        {
            this.setState({
                items:updatedItem,
                item:"",
                id:uuidv4(),
                editItem:false,

            },() =>console.log(this.state))
        }



    }
    clearList = () => {
        this.setState({items:[]})
    }
    handleDelete = (id) => {
        const filteredItem = this.state.items.filter(item => item.id!==id)
        this.setState({items:filteredItem})
    }
    handleEdit = (id) => {
        const filteredItem = this.state.items.filter(item => item.id!==id)
        const selectedItem =this.state.items.find(item => item.id===id);
        this.setState({
            items:filteredItem,
            item:selectedItem.title,
            id:id,
            editItem:true
        })
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
                            items={this.state.items}
                            handleEdit={this.handleEdit}
                            handleDelete={this.handleDelete}
                            clearList={this.clearList}
                        />
                    </div>

                </div>
            </div>


        );
    }
}

export default App;
