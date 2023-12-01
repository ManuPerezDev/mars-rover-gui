import './Rover.css'
import { useEffect } from 'react'
import { Rover } from '../../mars-rover/src/domain/Rover'
import GridItems from './GridItems'
import { MoveForward } from '../../mars-rover/src/domain/MoveForward'
import { Position } from '../../mars-rover/src/domain/Position'
import { Direction } from '../../mars-rover/src/domain/Direction/Direction'
import { MoveBackward } from '../../mars-rover/src/domain/MoveBackward'
import { TurnLeft } from '../../mars-rover/src/domain/TurnLeft'
import { TurnRight } from '../../mars-rover/src/domain/TurnRight'

const RoverLayout = ({ rover }: { rover: Rover }) => {
  const onClickLeft = () => {
    const roverStates = rover.readCommands([new TurnLeft()])
    drawRover(roverStates)
  }

  const onClickRight = () => {
    const roverStates = rover.readCommands([new TurnRight()])
    drawRover(roverStates)
  }

  const onClickForward = () => {
    const cell = document.getElementById(`${rover.getPosition().getX()},${rover.getPosition().getY()}`)
    cell!.style.backgroundColor = 'white'
    cell!.style.borderColor = 'black'
    const roverStates = rover.readCommands([new MoveForward()])
    drawRover(roverStates)
  }

  const onClickBackward = () => {
    const cell = document.getElementById(`${rover.getPosition().getX()},${rover.getPosition().getY()}`)
    cell!.style.backgroundColor = 'white'
    cell!.style.borderColor = 'black'
    const roverStates = rover.readCommands([new MoveBackward()])
    drawRover(roverStates)
  }

  function drawRover(roverStates: { position: Position, direction: Direction }[]) {
    const roverFollowingState = roverStates[1]
    const cell = document.getElementById(`${roverFollowingState.position.getX()},${roverFollowingState.position.getY()}`)
    cell!.style.backgroundColor = '#F38484'
    if (roverFollowingState.direction.isNorth()) {
      cell!.style.borderColor = '#F38484'
      cell!.style.borderTopColor = 'green'
    } else if (roverFollowingState.direction.isEast()) {
      cell!.style.borderColor = '#F38484'
      cell!.style.borderRightColor = 'green'
    } else if (roverFollowingState.direction.isSouth()) {
      cell!.style.borderColor = '#F38484'
      cell!.style.borderBottomColor = 'green'
    } else if (roverFollowingState.direction.isWest()) {
      cell!.style.borderColor = '#F38484'
      cell!.style.borderLeftColor = 'green'
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

  return (
    <div>
      <div className='grid-container'>
        <GridItems/>
      </div>
      <button onClick={onClickForward}>Forward</button>
      <button onClick={onClickBackward}>Backward</button>
      <button onClick={onClickLeft}>Left</button>
      <button onClick={onClickRight}>Right</button>
    </div>
  )
}

export default RoverLayout
