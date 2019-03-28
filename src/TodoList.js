import React from 'react';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            item: null
        }
    }

    componentDidMount() {
        this.setState({
            item: this.props.item
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        this.props.editTodoItem(this.state.item);
    }

    handleChange = (e) => {
        // let updatedItem = this.state.item;
        // updatedItem.content = e.target.value;
        // this.setState(
        //     {item: updatedItem}
        // );

        this.setState(state => {
            return state.item.content = e.target.value
        });

    }
    openEditField = () => {

        this.setState({
            toggle: !this.state.toggle,
        });
    }

    render() {
        return <div className="collection-item">
            <span>{this.props.item.content}</span>
            <button onClick={() => {this.props.deleteTodoItem( this.state.item ? this.state.item.id : '')}}>Delete</button>
            <button onClick={ this.openEditField}>Edit</button>
            <div>
                <input type="text" name="content" onChange={this.handleChange} />
                <button>done</button>
            </div>
        </div>
    }
};


export default TodoList;
