import React, { Component } from 'react';

import Boardsmenu from './boardsmenu.js';

class Boards extends Component {
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
                <button className = 'header-btn header-boards' onMouseDown={this.handleMouseDown}>Boards</button>
                <Boardsmenu handleMouseDown={this.handleMouseDown}
                    boardsVisibility={this.state.visible} />
            </div>
        );
    }
}
export default Boards