import React, { Component } from 'react';
import Headerinfomenu from './header-info-menu.js';



class Headerinfo extends Component {
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
                <span className='header-btn-icon'>
                <img src="/info.png" className='icon-style' alt="info"/></span>
                </a>  
                <Headerinfomenu handleMouseDown={this.handleMouseDown}
                    headerinfoVisibility={this.state.visible} />
            </div>
        );
    }
}
export default Headerinfo;