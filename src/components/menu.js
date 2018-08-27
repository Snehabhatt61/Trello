import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className='dropdown'>
                <button className='dropbutton'>Menu</button>
                <div className='drop-content'>
                    <a href='#'>Invite</a>
                    <a href='#'>Edit Card</a>
                    <a href='#'>Settings</a>
                </div>
            </div>

        )
    }
}
export default Menu;
