import React, { Component } from 'react';
import Boardname from './board-name';
import Menucontainer from './menucontainer';
import Businessclassteam from './business-class-team';

class Body1 extends Component {
    render() {
        return (
            <div className="body1">

                <Boardname />
                <a>
                    <span className='body-header-name'><img src='' />**</span>
                </a>
                <Businessclassteam />
                <a>
                    <span className='body-header-name'>Private</span>
                </a>
                <span className='body-header-name show'>
                    <Menucontainer />
                </span>



            </div>



        );
    }
}
export default Body1;