import React, { Component } from 'react';
import boardnamemenuVisibility from 'react';


class Boardsmenu extends Component {

    render() {
        var visibility = "hide";

        if (this.props.boardsVisibility)
         {boardnamemenuVisibility
            visibility = "show";
        }
        return (
            <div id='boardsmenu'
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>

                <input className='search-boards' placeholder='Find boards by name...'></input>
                <div className='drawer-board'>

                    <div className='starred-board'>
                        <img className='starred-icon' src="/star1.png" />
                        <span className='title-board'>Starred Boards</span>
                        <div>
                            <ul className='boards-list'>
                                <li className='boards-content-list'>
                                <div className='boards-wrapper'>
                                <a className='board-tile'>
                                    <span className='boards-background-thumnail'></span>
                                    <span className='content-list-details'>
                                        <span className='boards-content-list-title'>Hey</span>
                                        <span className='boards-content-list-subname'>Business Class Team</span>
                                    </span>
                                </a>    
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                   
                    <div className='starred-board'>
                        <img className='starred-icon' src="/star1.png" />
                        <span className='title-board'>Recent Boards</span>
                        <div>
                            <ul className='boards-list'>
                                <li className='boards-content-list'>
                                <div className='boards-wrapper'>
                                <a className='board-tile'>
                                    <span className='boards-background-thumnail'></span>
                                    <span className='content-list-details'>
                                        <span className='boards-content-list-title'>Bye</span>
                                        <span className='boards-content-list-subname'>Business Class Team</span>
                                    </span>
                                </a>    
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='starred-board'>
                        <img className='starred-icon' src="/star1.png" />
                        <span className='title-board'>Personal Boards</span>
                        <div>
                            <ul className='boards-list'>
                                <li className='boards-content-list'>
                                <div className='boards-wrapper'>
                                <a className='board-tile'>
                                    <span className='boards-background-thumnail'></span>
                                    <span className='content-list-details'>
                                        <span className='boards-content-list-title'>Bye</span>
                                        
                                    </span>
                                </a>    
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Boardsmenu;

