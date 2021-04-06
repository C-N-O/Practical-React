import React, { useRef, useState } from 'react';
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function IdleTimerContainer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);

  const onIdle = () => {
    console.log('User is idle');
    setModalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(logout, 5000); //logout after 5 seconds of been idle
  };

  const logout = () => {
    setIsLoggedIn(false);
    setModalIsOpen(false);
    clearTimeout(sessionTimeoutRef.current);
    console.log('USer has logged out');
  };

  const stayActive = () => {
    console.log('User is active');
    clearTimeout(sessionTimeoutRef.current);
    setModalIsOpen(false);
  };

  return (
    <div>
      {isLoggedIn ? <h2>Hello Clifford</h2> : <h2>Hello Guest</h2>}

      <Modal isOpen={modalIsOpen}>
        <h2>You've been idle for a while</h2>
        <p>You will be logged out shortly</p>
        <button onClick={logout}>Log Me Out</button>
        <button onClick={stayActive}>Keep me signed in</button>
      </Modal>
      <IdleTimer
        ref={idleTimerRef} //we use this for the idle timer
        timeout={5 * 1000} //seconds count
        onIdle={onIdle} //executes after the timeout count
      ></IdleTimer>
    </div>
  );
}

export default IdleTimerContainer;
