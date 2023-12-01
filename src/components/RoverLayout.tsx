import './Rover.css'
import { useEffect } from 'react'
import { Rover } from '../mars-rover/domain/Rover'
import GridItems from './GridItems'

const RoverLayout = ({ rover }: { rover: Rover }) => {
  const onClickLeft = () => {
    rover.turnLeft()
    drawDirection()
  }

  const onClickRight = () => {
    rover.turnRight()
    drawDirection()
  }

  const onClickForward = () => {
    const cell = document.getElementById(`${rover.getPosition().getX()},${rover.getPosition().getY()}`)
    cell!.style.backgroundColor = 'white'
    cell!.style.borderColor = 'black'
    rover.moveForward()
    drawDirection()
  }

  const onClickBackward = () => {
    const cell = document.getElementById(`${rover.getPosition().getX()},${rover.getPosition().getY()}`)
    cell!.style.backgroundColor = 'white'
    cell!.style.borderColor = 'black'
    rover.moveBackward()
    drawDirection()
  }

  function drawDirection() {
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
    drawDirection()
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
