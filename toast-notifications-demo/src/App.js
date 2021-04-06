import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

toast.configure();

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Oops! something went wrong <button onClick={closeToast}>close</button>
    </div>
  );
};

function App() {
  const notify = () => {
    toast('You clicked the button', { position: toast.POSITION.TOP_LEFT });

    toast.success('Success', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });

    toast.info('Info', { position: toast.POSITION.TOP_RIGHT });

    toast.warn('Warning', {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: false,
    });

    toast.error('Error', {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 10000,
    });

    toast.warn(<CustomToast />, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: false,
    });
  };

  return (
    <div className='App'>
      <button onClick={notify}>Notify</button>
    </div>
  );
}

export default App;

//By default, the notifications close after 5 secons
//autoClose: false = toast will not auto close
//You can also create a custom toast
