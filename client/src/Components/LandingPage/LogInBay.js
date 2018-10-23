import React from 'react';
import ReactModal from 'react-modal';
import { AppContextConsumer } from '../../AppContext';

import './LogInBay.css';

// ReactModal.setAppElement('div');

const SignUpModalStyles = {
  content: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '300px',
    width: '300px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '3px dashed red'
  }
};

class LogInBay extends React.Component {
  state = {
    showModal: false
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <AppContextConsumer>
        {({ handleSignIn, handleSignUp }) => (
          <div className="LogInBay">
            <form className="LogInForm" onSubmit={handleSignIn}>
              Sign In
              <input type="text" placeholder="Username" name="username" />
              <input type="text" placeholder="Password" name="password" />
              <input type="submit" />
            </form>

            <br />
            <p> - or -</p>
            <br />

            <button
              type="button"
              className="LogInBay__SignUpButton"
              onClick={this.handleOpenModal}
            >
              Sign Up
            </button>

            <ReactModal
              id="SignUpModal"
              style={SignUpModalStyles}
              isOpen={this.state.showModal}
              contentLabel="Example Text"
              onRequestClose={this.handleCloseModal}
              shouldCloseOnOverlayClick={true}
            >
              <p>Sign Up</p>
              <form
                onSubmit={handleSignUp}
                style={{ display: 'flex', flexFlow: 'column nowrap' }}
              >
                <input type="text" placeholder="Username" name="username" />
                <input type="text" placeholder="Email" name="email" />
                <input type="text" placeholder="Password" name="password" />
                <input
                  type="text"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                />
                <input type="submit" />
              </form>
              <button onClick={this.handleCloseModal}>Close Modal</button>
            </ReactModal>
          </div>
        )}
      </AppContextConsumer>
    );
  }
}

export default LogInBay;
