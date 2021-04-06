import './App.css';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root'); //Added for accessibility reasons and to clear console errors

const style = {
  overlay: { backgroundColor: 'grey' },
  content: { color: 'orange' },
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='App'>
      <button onClick={() => handleClick()}>Open Modal</button>
      <div>
        <Modal
          isOpen={isOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => handleClick()}
          style={style}
        >
          <h2>Modal Title</h2>
          <p>Modal Body</p>
          <button onClick={() => handleClick()}>Close Modal</button>
        </Modal>
      </div>
    </div>
  );
}

export default App;

//onRequestClose={() => handleClick() will close the modal when the overlay is clicked
//shouldCloseOnOverlayClick={false} will prevent the modal from closing when the overlay is clicked
