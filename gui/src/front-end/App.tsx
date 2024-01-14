import React from 'react'
import './App.css'
import RoverLayout from './components/RoverLayout'
import { MoveRover } from './actions/MoveRover'

function App() {
  const roverInitialState = {
    position: {
      x: 2,
      y: 2
    },

    direction: 'north'
  }
  return (
    <RoverLayout rover={roverInitialState} moveRover={MoveRover}/>
  )
}

export default App
