import React, { Component } from 'react';
import Headernotificationmenu from './header-notification-menu.js';



class Headernotification extends Component {
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
                <a className='header-btn' onMouseDown={this.handleMouseDown}>
                <span className='header-btn-icon icon-add'>
                <img src="/info.png" className='icon-style' alt="add"/></span>
                </a>
                             
                <Headernotificationmenu handleMouseDown={this.handleMouseDown}
                    headernotificationVisibility={this.state.visible} />
            </div>
        );
    }
}
export default Headernotification;