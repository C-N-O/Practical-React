import './App.css';
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

function App() {
  const [color, setColor] = useState('#000000');
  const [showColorPicker, setShowColorPicker] = useState(false);

  const style = {
    color: color,
  };

  return (
    <div className='App'>
      {/* <button
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
      >
        {showColorPicker ? 'Close Color Picker' : 'Pick a Color'}
      </button> */}

      <div className='pickerWidget'>
        {showColorPicker && (
          <ChromePicker
            color={color}
            onChange={(updatedColor) =>
              setColor(updatedColor.hex.toUpperCase())
            }
          />
        )}
      </div>

      {/* <h2> You picked {color}</h2> */}
      <div className='line'>
        <h1 style={style}>This is a Test</h1>
        <button
          onClick={() =>
            setShowColorPicker((showColorPicker) => !showColorPicker)
          }
        >
          {showColorPicker ? 'Apply' : 'Pick a Color'}
        </button>
      </div>
    </div>
  );
}

export default App;
