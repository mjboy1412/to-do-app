import React, {Component} from 'react';
import TodoList from './TodoList';
import AddItem from "./AddItem";

class App extends Component {
    state = {
        todoItems: [
            {id: 1, content: 'learn JS'},
            {id: 2, content: 'learn React'}
        ]
    };


    deleteTodoItem = (id) => {
        console.log("deleted " + id);
        let updatedTodoItem = this.state.todoItems.filter(todoItem => {
            return todoItem.id !== id;
        });
        this.setState({
            todoItems: updatedTodoItem
        });
    };
    addTodoItem = (item) => {
        console.log("add " + item);
        item.id = Math.random();
        let updatedTodoItem = this.state.todoItems;
        updatedTodoItem.push(item);
        this.setState({
            todoItems: updatedTodoItem,
        });
    };
    editTodoItem = (editedItem) => {
        let found = this.state.todoItems.find(item => item.id = editedItem.id);
        console.log(found);
    }



    render() {
        let listItem;
        if(this.state.todoItems){
            listItem = this.state.todoItems.map(item => {
                return <TodoList deleteTodoItem ={this.deleteTodoItem} item={item} key={item.id} editTodoItem={this.editTodoItem}/>
            })
        }else {
            listItem = <p className="center">Nothing else to do</p>;
        }
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">To-do app</h1>
                <AddItem addItem={this.addTodoItem} />
                {listItem}
            </div>
        );



    }
}

export default App;
