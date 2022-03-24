import React from 'react';
import ButtonGroup from './Components/buttonGroup';
import Timer from './Components/Timer'
import Laps from './Components/Laps'
import './index.css';

const App = () => {
  return (
    <div> 
        <Timer />
        <ButtonGroup />
        <Laps />
    </div>
  )
}

export default App