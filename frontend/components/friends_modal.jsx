import React, { Component } from 'react';
const Modal = require('react-modal');
class FriendsModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  openModal() {
    this.setState({ modalOpen: true })
  }

  render() {
    return(
      <div>
      <button onClick={this.openModal}>Open Me!</button>

      <Modal>
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}

          <h2>Im a modal!</h2>
          <p>modal modal modal modal modal</p>
          <p>mooooooooodal!</p>

      </Modal>
      </div>
    );
  }
}
export default FriendsModal;
