import React, { Component } from 'react';
import Modal from './modal.js';
import Modaladd from './modal-add.js';

class Mainmodal extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Mainmodal">
          <button onClick={this.toggleModal}>
            Open the Modal
          </button>

          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            Here's some content for the modal
          </Modal>
   
      </div>
    );
  }
}
export default Mainmodal;