import './Rover.css'
import { useEffect, useState } from 'react'
import { Rover } from '../../mars-rover/src/domain/Rover'
import GridItems from './GridItems'
import { MoveForward } from '../../mars-rover/src/domain/MoveForward'
import { Position } from '../../mars-rover/src/domain/Position'
import { Direction } from '../../mars-rover/src/domain/Direction/Direction'
import { MoveBackward } from '../../mars-rover/src/domain/MoveBackward'
import { TurnLeft } from '../../mars-rover/src/domain/TurnLeft'
import { TurnRight } from '../../mars-rover/src/domain/TurnRight'

const RoverLayout = ({ rover }: { rover: Rover }) => {
  const [commands, setCommands] = useState('')

  const onClickLeft = async () => {
    const roverStates = rover.readCommands([new TurnLeft()])
    await drawRover(roverStates)
  }

  const onClickRight = async () => {
    const roverStates = rover.readCommands([new TurnRight()])
    await drawRover(roverStates)
  }

  const onClickForward = async () => {
    const cell = document.getElementById(`${rover.getPosition().getX()},${rover.getPosition().getY()}`)
    cell!.style.backgroundColor = 'white'
    cell!.style.borderColor = 'black'
    const roverStates = rover.readCommands([new MoveForward()])
    await drawRover(roverStates)
  }

  const onClickBackward = async () => {
    const cell = document.getElementById(`${rover.getPosition().getX()},${rover.getPosition().getY()}`)
    cell!.style.backgroundColor = 'white'
    cell!.style.borderColor = 'black'
    const roverStates = rover.readCommands([new MoveBackward()])
    await drawRover(roverStates)
  }

  async function drawRover(roverStates: { position: Position, direction: Direction }[]) {
    const [initialState, ...states] = roverStates
    const cell = document.getElementById(`${initialState?.position.getX()},${initialState?.position.getY()}`)
    cell!.style.backgroundColor = 'white'
    cell!.style.borderColor = 'black'

    for (const [index, state] of states.entries()) {
      if (index !== 0) {
        const cell = document.getElementById(`${states[index - 1]?.position.getX()},${states[index - 1]?.position.getY()}`)
        cell!.style.backgroundColor = 'white'
        cell!.style.borderColor = 'black'
      }

      const cell = document.getElementById(`${state.position.getX()},${state.position.getY()}`)
      cell!.style.backgroundColor = '#F38484'
      if (state.direction.isNorth()) {
        cell!.style.borderColor = '#F38484'
        cell!.style.borderTopColor = 'green'
      } else if (state.direction.isEast()) {
        cell!.style.borderColor = '#F38484'
        cell!.style.borderRightColor = 'green'
      } else if (state.direction.isSouth()) {
        cell!.style.borderColor = '#F38484'
        cell!.style.borderBottomColor = 'green'
      } else if (state.direction.isWest()) {
        cell!.style.borderColor = '#F38484'
        cell!.style.borderLeftColor = 'green'
      }
    }
  }

  function drawRoverFromInitialPosition() {
    const cell = document.getElementById(`${rover.getPosition().getX()},${rover.getPosition().getY()}`)
    cell!.style.backgroundColor = '#F38484'
    if (rover.getDirection().isNorth()) {
      cell!.style.borderColor = '#F38484'
      cell!.style.borderTopColor = 'green'
    } else if (rover.getDirection().isEast()) {
      cell!.style.borderColor = '#F38484'
      cell!.style.borderRightColor = 'green'
    } else if (rover.getDirection().isSouth()) {
      cell!.style.borderColor = '#F38484'
      cell!.style.borderBottomColor = 'green'
    } else if (rover.getDirection().isWest()) {
      cell!.style.borderColor = '#F38484'
      cell!.style.borderLeftColor = 'green'
    }
  }

  useEffect(() => {
    drawRoverFromInitialPosition()
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
    await drawRover(roverStates)
    event.preventDefault()
  }

  function handleChange(event: any) {
    setCommands(event.target.value)
  }

  return (
    <div>
      <div className='grid-container'>
        <GridItems/>
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
