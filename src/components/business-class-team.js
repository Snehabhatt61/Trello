import React, { Component } from 'react';
import Businessclassmenu from './business-class-menu.js';

class Businessclassteam extends Component {
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
                <a className='body-header-name'
                    onMouseDown={this.handleMouseDown}
                >
                    Business class team
                </a>
                <Businessclassmenu handleMouseDown={this.handleMouseDown}
                    businessclassmenuVisibility={this.state.visible} />
            </div>
        );
    }
}
export default Businessclassteam;