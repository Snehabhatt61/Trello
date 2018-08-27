import React,{Component} from 'react';


class Modaladd extends Component
{
    render()
    {
        if(!this.props.show) {
            return null;
          }
        return(
            <div className='sidebar-modal'>
                <span>ADD</span>
                <ul>
                    <li>Members</li>
                    <li>Members</li>
                    <li>Members</li>
                    <li>Members</li>
                </ul>
            </div>  
        );
    }
}
export default Modaladd;

