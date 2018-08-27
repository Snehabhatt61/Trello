import React, { Component } from 'react';

class Menuu extends Component {
    render() {
        var visibility = 'hide';

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <div className='menu-content'>
                    <div className='menu-container'>
                        <div className='menu-tab-content'>
                            <div className='menu-titlee'>
                                <h1>Menu</h1>
                            </div>
                            <h2><a href="#">Change Background</a></h2>
                            <h2><a href="#">Filter Cards</a></h2>
                            <h2><a href="#">Power-Ups</a></h2>
                            <h2><a href="#">More</a></h2><hr />
                            <h3>Activity</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Menuu;