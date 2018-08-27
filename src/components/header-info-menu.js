import React, { Component } from 'react';

class Headerinfomenu extends Component {

    render() {
        var visibility = "hide";

        if (this.props.headerinfoVisibility) {
            visibility = "show";
        }
        return (
            <div id='header-info-menu'
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <div className='add-menu-header'>
                    <span className='add-menu-header-title'>Information</span>
                    <a href='#' className='add-menu-header-close'></a>
                </div>
                <div className='add-menu-header-content'>

                    <ul className='add-menu-list'>
                       
                       
                    </ul>
                </div>
            </div>
        );
    }
}
export default Headerinfomenu;
