import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
        }
    }
    handleChange = (e) => {
        console.log(e);
        let data = {
            taskname: e.target.value
        }
        if (e.key === 'Enter') {
            this.submit();
        }
        else {
            this.setState({
                value: e.target.value
            })
        }
        console.log(e);
        
        localStorage.setItem ('item', JSON.stringify(data));
        // console.log('bye' , data)
    }
    
    submit = async () => {
        await this.props.tasks.task.push(this.state.value);
        this.props.toggleInput();
    }
    render() {
        return (
            <div>
                <input name='task' onKeyUp={(e) => this.handleChange(e)} />
                <div className='input-buttons'>
                    <button className='add-button' onClick={() => this.submit()}>Add</button>
                    <button className='add-close' onClick={() => this.props.toggleInput()}>Cancel</button>
                </div>
            </div>
        );
    }
}
export default Input;
