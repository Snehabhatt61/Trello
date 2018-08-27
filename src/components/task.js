import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
        let text, obj;

        //  localStorage.getItem('item', JSON.parse(obj));
        // console.log('hello',obj);

        text = localStorage.getItem('item');
        obj = JSON.parse(text);
        console.log(obj);
    }
    render() {
        return (
            <a className='task-main'>
                {this.props.task.map(
                    (value, i) => {
                        return (
                            <div className="list-header"> <p>
                                {value}
                                <button className='edit-icon'><i src="/edit.svg" alt='icon' /></button>
                            </p></div>);
                    }
                )}
            </a>
        );
    }
}
export default Task;
