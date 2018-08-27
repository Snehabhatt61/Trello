import React, { Component } from 'react';
class Addfile extends Component {
    render() {
        return (
            <div className='add-div'>
                <button className='add-file' onClick={() => this.props.toggleInput()}>
                   Add a card...
                </button>
            </div>
        );
    }
}
export default Addfile;
