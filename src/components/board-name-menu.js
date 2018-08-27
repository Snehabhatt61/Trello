import React, { Component } from 'react';

class Boardnamemenu extends Component {

    render() {
        var visibility = "hide";

        if (this.props.boardnamemenuVisibility) {
            visibility = "show";
        }
        return (
            <div id='boardnamemenu'
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <div>
                    <div className='pop-over'>
                        <span className='pop-over-title'>Rename Board</span>
                        <a href='#' className='pop-over-title-close'>
                            {/* <img src='/close.png' className='close-icon'/> */}
                        </a>                      
                        <div className='pop-over-content'>
                            <div>
                                <div>
                                    <form>
                                        <label>Name</label>
                                        <input type='text' defaultValue='abc'/>
                                        <input className='primary wide' type='submit' defaultValue='Rename'/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    } 
}
export default Boardnamemenu;        

