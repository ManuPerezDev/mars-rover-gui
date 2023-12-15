import './RoverLayout.css'
import { useState } from 'react'
import { Rover } from '../../mars-rover/src/domain/Rover'
import Map from './Map'
import { MoveForward } from '../../mars-rover/src/domain/MoveForward'
import { MoveBackward } from '../../mars-rover/src/domain/MoveBackward'
import { TurnLeft } from '../../mars-rover/src/domain/TurnLeft'
import { TurnRight } from '../../mars-rover/src/domain/TurnRight'
import RoverCell from './RoverCell'

const RoverLayout = ({ rover }: { rover: Rover }) => {
  const [commands, setCommands] = useState('')
  const [roverState, setRoverState] = useState({ position: rover.getPosition(), direction: rover.getDirection() })

  const onClickLeft = async () => {
    const [state] = rover.move([new TurnLeft()])
    setRoverState({ position: state.position, direction: state.direction })
  }

  const onClickRight = async () => {
    const [state] = rover.move([new TurnRight()])
    setRoverState({ position: state.position, direction: state.direction })
  }

  const onClickForward = async () => {
    const [state] = rover.move([new MoveForward()])
    setRoverState({ position: state.position, direction: state.direction })
  }

  const onClickBackward = async () => {
    const [state] = rover.move([new MoveBackward()])
    setRoverState({ position: state.position, direction: state.direction })
  }

  async function handleSubmit(event: any) {
    if (commands === '') {
      return
    }

    const domainCommands = commands.split('').map(command => {
      if (command === 'f') {
        return new MoveForward()
      } else if (command === 'b') {
        return new MoveBackward()
      } else if (command === 'l') {
        return new TurnLeft()
      } else if (command === 'r') {
        return new TurnRight()
      } else {
        throw new Error('Invalid command')
      }
    })

    const roverStates = rover.move(domainCommands)

    for (const state of roverStates) {
      setRoverState({ position: state.position, direction: state.direction })
    }
    event.preventDefault()
  }

  function handleChange(event: any) {
    setCommands(event.target.value)
  }

  return (
    <div>
      <div className='grid-container'>
        <Map/>
        <RoverCell state={roverState}/>
      </div>
      <button onClick={onClickForward}>Forward</button>
      <button onClick={onClickBackward}>Backward</button>
      <button onClick={onClickLeft}>Left</button>
      <button onClick={onClickRight}>Right</button>
      <form onSubmit={handleSubmit}>
        <label>
          Commands:
          <input type='text' value={commands} onChange={handleChange}/>
        </label>
        <input type='submit' value='Submit'/>
      </form>
    </div>
  )
}

export default RoverLayout
