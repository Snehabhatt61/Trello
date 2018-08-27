import React, { Component } from 'react';
import Boards from './boards.js';
import Headeradd from './header-add.js';
import Headerinfo from './header-info.js';
import Headernotification from './header-notification.js';


class Header extends Component {
    render() {
        return (
            <header className="App-header">
                
                 <Boards />

                   <div className='header-search'>
                        <input type='text' className='header-search-input' placeholder='Search'/>
                            <span className='header-search-icon icon-lg'></span>
                            
                            
                    </div >
                <a className='header-logo' href='#'>Trello
                    <span className='logoname'></span>
                </a>   
                {/* <div className='header-user'>  
                    
                            <Headeradd/>
                   
                  
                            <Headerinfo/>
                    
                       
                            <Headernotification/>
                   
                </div> */}
            </header>
        );
    }
}
export default Header;