import React from 'react';
import './App.css';

import {randomColor, textColorFromBg, rgbToHex} from '../../resources/randomColor';

function App() {
  const bgColor = randomColor();
  const textColor = textColorFromBg(bgColor);

  const style = {
    backgroundColor: rgbToHex(bgColor),
    color: rgbToHex(textColor)
  };
  
  return (
    <div className="App" style={style}>
      <h1>Project Template</h1>
    </div>
  );
}

export default App;
