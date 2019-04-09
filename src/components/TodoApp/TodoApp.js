import React, {Component} from 'react';
import TodoList from './TodoList';
import AddItem from "./AddItem";
import {Link} from "react-router-dom";

class TodoApp extends Component {
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
        item.id = Math.random();
        let updatedTodoItem = this.state.todoItems.concat(item);
        this.setState({
            todoItems: updatedTodoItem,
        });
    };
    editTodoItem = (editedItem) => {


        let found = this.state.todoItems.find(item => item.id === editedItem.id);
        let foundIndex = this.state.todoItems.indexOf(found);
        let updateTodoItems = this.state.todoItems.slice(0);
        updateTodoItems[foundIndex] = editedItem;
        if (found) {

            this.setState({
                todoItems: updateTodoItems
            });
        }
        console.log(this.state.todoItems);


    }


    render() {
        let listItem;
        console.log(this.state);
        if (this.state.todoItems) {
            listItem = this.state.todoItems.map(item => {
                return <TodoList deleteTodoItem={this.deleteTodoItem} item={item} key={item.id}
                                 editTodoItem={this.editTodoItem}/>
            })
        } else {
            listItem = <p className="center">Nothing else to do</p>;
        }
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">To-do app</h1>
                <AddItem addItem={this.addTodoItem}/>
                {listItem}
                <Link to={'/calculator'}>to calculator app</Link>
            </div>
        );


    }
}

export default TodoApp;
