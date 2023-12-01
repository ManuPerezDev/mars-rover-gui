import './RoverLayout.css'
import { useEffect, useState } from 'react'
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
    rover.readCommands([new TurnLeft()])
    setRoverState({ position: rover.getPosition(), direction: rover.getDirection() })
  }

  const onClickRight = async () => {
    rover.readCommands([new TurnRight()])
    setRoverState({ position: rover.getPosition(), direction: rover.getDirection() })
  }

  const onClickForward = async () => {
    rover.readCommands([new MoveForward()])
    setRoverState({ position: rover.getPosition(), direction: rover.getDirection() })
  }

  const onClickBackward = async () => {
    rover.readCommands([new MoveBackward()])
    setRoverState({ position: rover.getPosition(), direction: rover.getDirection() })
  }

  useEffect(() => {
    setRoverState({ position: rover.getPosition(), direction: rover.getDirection() })
  }, [])

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

    const roverStates = rover.readCommands(domainCommands)
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
