import React from 'react'
import './App.css'
import RoverLayout from './components/RoverLayout'
import { Land } from './mars-rover/domain/Land'
import { Position } from './mars-rover/domain/Position'
import { Rover } from './mars-rover/domain/Rover'
import { North } from './mars-rover/domain/Direction/North'

function App() {
  const land = new Land(5, 5)
  const position = new Position(2, 2)
  const direction = new North()
  const rover = new Rover(land, position, direction)

  return (
    <RoverLayout rover={rover}/>
  )
}

export default App
