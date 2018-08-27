import React, { Component } from 'react';

class Businessclassmenu extends Component {

    render() {
        var visibility = "hide";

        if (this.props.businessclassmenuVisibility) {
            visibility = "show";
        }
        return (
            <div id='businessclassmenu'
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <div>
                    <div className='pop-over-team'>
                        <span className='pop-over-title'>Business Class Name</span>
                        <a href='#' className='pop-over-title-close'>
                            <img src='/close.png' className='close-icon' />
                        </a>

                        <div className='pop-over-content'>
                            <div>
                                <div>
                                    <ul className='pop-over-list'>
                                        <li>
                                            <a href=''>Change Team</a>
                                        </li>
                                        <li>
                                            <a href='#'>View Team Page</a>
                                        </li>
                                        <li>
                                            <a href='#'>Update Business Class</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Businessclassmenu;      