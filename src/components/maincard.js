import React, { Component } from 'react';
import Title from './title.js';
import AddFile from './Addafile.js';
import Input from './inputarea.js';
import Task from './task.js';
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleInput: false,
            task: []

        }
    }
    toggleInput = () => {
        this.setState({
            toggleInput: !this.state.toggleInput
        })
    }
    render() {
        return (
            <div className='abc'>
                <Title />
                {this.state.task.length > 0 && <Task task={this.state.task} />}
                {
                    this.state.toggleInput ?
                        <Input
                            toggleInput={() => this.toggleInput()} /* function */
                            tasks={this.state}
                        />
                        :
                        <AddFile toggleInput={() => this.toggleInput()} />
                }
            </div>
        );
    }
}
export default Card;