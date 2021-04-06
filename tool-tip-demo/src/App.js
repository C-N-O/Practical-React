import React from 'react';
import './App.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function App() {
  return (
    <div className='App'>
      <div style={{ paddingBottom: '10px' }}>
        <Tippy content='Basic Tool Tip with arrow'>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '10px' }}>
        <Tippy
          delay={1000}
          arrow={false}
          placement='left'
          content='String content'
        >
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: '10px' }}>
        <Tippy
          placement='right'
          content={<span style={{ color: 'red' }}>JSX content</span>}
        >
          <button>Hover</button>
        </Tippy>
      </div>
    </div>
  );
}

export default App;

//arrow prop determines if the tool tip has an arrow or not
//delay prop adds a delay to both showing and hiding of the tool tip
//the placement prop determines where the tool tip should appear
