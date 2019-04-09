import React, {Component} from 'react';

class AddItem extends Component {
    state = {
        content: ''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            content: ''
        });
    };

    render() {
        return (
            <div className="add-item">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="content" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    };
}

export default AddItem;
