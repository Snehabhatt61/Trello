import React, { Component } from 'react';
import Boardnamemenu from './board-name-menu.js';

class Boardname extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.togglemenu = this.togglemenu.bind(this);
    }
    handleMouseDown(e) {
        this.togglemenu();
    }
    togglemenu() {
        this.setState({
            visible: !this.state.visible
        });
    }
    render() {
        return (
            <div>
                <p className='body-header-name'
                    onMouseDown={this.handleMouseDown}
                >
                    HEY
                 </p>
                <Boardnamemenu handleMouseDown={this.handleMouseDown}
                    boardnamemenuVisibility={this.state.visible} />
            </div>
        );
    }
}
export default Boardname;