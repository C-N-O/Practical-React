import logo from './logo.svg';
import './App.css';
import { IconContext } from 'react-icons'; //to set value props across all icons
import { FaBattleNet } from 'react-icons/fa'; //import from font awesome
import { MdAlarm } from 'react-icons/md'; //import from material design
import { SiFifa } from 'react-icons/si'; //import from simple icon

function App() {
  return (
    <IconContext.Provider value={{ color: 'blue', size: '5rem' }}>
      <div className='App'>
        <FaBattleNet color='purple' size='20rem' />
        <MdAlarm color='green' size='10rem' />
        <SiFifa />
      </div>
    </IconContext.Provider>
  );
}

export default App;

// To use react icons, I used: npm install react-icons
