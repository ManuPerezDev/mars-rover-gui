import './RoverLayout.css'
import { useRef, useState } from 'react'
import { Rover } from '../../mars-rover/src/domain/Rover'
import Map from './Map'
import { MoveForward } from '../../mars-rover/src/domain/MoveForward'
import { MoveBackward } from '../../mars-rover/src/domain/MoveBackward'
import { TurnLeft } from '../../mars-rover/src/domain/TurnLeft'
import { TurnRight } from '../../mars-rover/src/domain/TurnRight'
import { Position } from '../../mars-rover/src/domain/Position'
import { Direction } from '../../mars-rover/src/domain/Direction/Direction'
import { Rover2 } from './Rover2'

export type RoverState = {
  position: Position,
  direction: Direction
}

const RoverLayout = ({ rover }: { rover: Rover }) => {
  const ref = useRef('')
  const [roverStates, setRoverRoverStates] = useState<RoverState[]>([{
    position: rover.getPosition(),
    direction: rover.getDirection()
  }])

  async function handleSubmit(event: any) {
    if (ref.current === '') {
      return
    }

    const domainCommands = ref.current.split('').map(command => {
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

    setRoverRoverStates(roverStates)

    event.preventDefault()
  }

  function handleChange(event: any) {
    ref.current = event.target.value
  }

  return (
    <div>
      <div className='grid-container'>
        <Map/>
        <Rover2 states={roverStates}/>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Commands:
          <input type='text' onChange={handleChange}/>
        </label>
        <input type='submit' value='Submit' disabled={false}/>
      </form>
    </div>
  )
}

export default RoverLayout
