import React from 'react'
import Button from './Button'
import {
    start,
    pause,
    lap,
    setMillisecondsToZero,
    setMinutesToZero,
    setSecondsToZero,
    reset,
    resetLaps
} from "./../Actions/stopWatchActions"
import {useDispatch, useSelector} from "react-redux"

function ButtonGroup() {
  const dispatch=useDispatch()
  const running=useSelector(state=>state.isRunning)
  const isPause=useSelector(state=>state.isPause)
  let {minutes,seconds,milliseconds} =useSelector(state=>state)

  const handleStart=()=>{
    dispatch(start())
  }
  
  const handleStop=()=>{
    dispatch(pause())
  }

  const handleReset=()=>{
    if(!running){
      dispatch(setMillisecondsToZero())
      dispatch(setSecondsToZero())
      dispatch(setMinutesToZero())
      dispatch(resetLaps())
      dispatch(reset())
    }
  }

  const handleLap=()=>{
    dispatch(lap({minutes,seconds,milliseconds}))
  }
  
  return (
    <div className="buttons">
        {!running && <Button handleClick={handleStart}>Start</Button>}
        { running && <Button handleClick={handleStop}>Stop</Button>}
        <Button handleClick={handleLap}>Lap</Button>
        {!running && <Button handleClick={handleReset}>Reset</Button>}
    </div>
  )
}

export default ButtonGroup