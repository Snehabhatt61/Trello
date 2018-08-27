import React, { Component } from 'react';

class Headernotificationmenu extends Component {

    render() {
        var visibility = "hide";

        if (this.props.headernotificationVisibility) {
            visibility = "show";
        }
        return (
            <div id='header-notification-menu'
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <div className='add-menu-header'>
                    <span className='add-menu-header-title'>Notification</span>
                    <a href='#' className='add-menu-header-close'></a>
                </div>
                <div className='add-menu-header-content'>

                    <ul className='add-menu-list'>
                        <li>
                            <a href='#'>
                                Create Board
                                <span className='sub-list'>
                                    A board is made up of cards ordered on lists. Use it to manage projects,
                                    track information, or organize anything.
                                </span>
                            </a>
                        </li>
                       
                       
                    </ul>
                </div>
            </div>
        );
    }
}
export default Headernotificationmenu;
