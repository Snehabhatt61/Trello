import React, { Component } from 'react';
import Boardname from './board-name';
import Menucontainer from './menucontainer';
import Businessclassteam from './business-class-team';

class Body1 extends Component {
    render() {
        return (
            <div className="body1">
                <a>
                    <Boardname /></a>
                <a>
                    <span className='body-header-name'><img src='' />**</span>
                </a>
                <a>
                    <Businessclassteam/>
                </a>
                <a>
                    <span className='body-header-name'>Private</span>
                </a>
                <a><span className='body-header-name show'>
                    <Menucontainer /></span>
                </a>


            </div>



        );
    }
}
export default Body1;