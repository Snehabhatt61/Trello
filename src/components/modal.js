import React, {Component} from 'react';
import Modaladd from './modal-add';

class Modal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }


    return (
    <div className="backdrop"> 
        <div className="modal">
            <div className='modal-box'>
                <h2>ABC</h2>
                    <button className='close-btn-modal' onClick={this.props.onClose}>
                        Close Window
                    </button>
                <p>in list To Do</p>  
                    <div className='content-modal'>
                        Content
                    </div>           
            </div>
            <Modaladd/>
        </div>
    </div>
    );
}
}
 export default Modal;