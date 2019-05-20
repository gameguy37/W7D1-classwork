import React from 'react';


function uniqueId() {
    return new Date().getTime();
}

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        };
        this.update = this.update.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
    }

    update(event) {
        event.preventDefault();
        this.setState( {
            title: event.currentTarget.value,
        });
    }


    submitEvent(event){
        event.preventDefault();
        if (this.state.title){
            this.props.receiveTodo({id: uniqueId(), title: this.state.title});
        }
        
        setTimeout( ()=> this.setState({title: ""} ), 0);
        
    }

    render () {
        return (
            <form onSubmit={this.submitEvent}>
            <input onChange={this.update} type="text" value={this.state.title}/>
            <input type="submit" value="Add Todo"/>
        </form>
        )
    }
}

export default TodoForm;