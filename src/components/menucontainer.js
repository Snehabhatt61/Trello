import React, { Component } from 'react';
import Menuu from './menuu.js';

class Menucontainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    handleMouseDown(e) {
        this.toggleMenu();

        console.log("clicked");
    }
    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }
    render() {
        return (
            <a className='show-menu-mod'>
                <div className='show-menu-mod'>
                    <a className='show-menu-btn' onMouseDown={this.handleMouseDown}>Show Menu..</a>
                    <Menuu handleMouseDown={this.handleMouseDown}
                        menuVisibility={this.state.visible} />
                </div>
            </a>
        );
    }
}
export default Menucontainer;