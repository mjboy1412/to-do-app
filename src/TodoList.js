import React from 'react';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        let copyProps = Object.assign({},this.props.item);
        this.state = {
            toggle: false,
            item: copyProps
        }

    }

    componentDidMount() {
           console.log(this.props.item);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editTodoItem(this.state.item);
    }

    handleChange = (e) => {
        let updatedItem = this.state.item;
        updatedItem.content = e.target.value;
        this.setState(
            {item: updatedItem}
        );

    }
    openEditField = () => {

        this.setState({
            toggle: !this.state.toggle,
        });
    }

    render() {
        let editField = this.state.toggle ? (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="content" onChange={this.handleChange} />
                <button>done</button>
            </form>
        ):(
            <div></div>
        );
        return <div className="collection-item">
            <span>{this.props.item.content}</span>
            <button onClick={() => {this.props.deleteTodoItem( this.state.item ? this.state.item.id : '')}}>Delete</button>
            <button onClick={ this.openEditField}>Edit</button>
            {editField}
        </div>
    }
};


export default TodoList;
