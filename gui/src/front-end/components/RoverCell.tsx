import './RoverCell.css'
import { RoverState } from './RoverLayout'

type RoverCellProps = {
  state: RoverState,
  index: number,
  totalStates: number
}

const RoverCell = (props: RoverCellProps) => {
  const { state, index, totalStates } = props
  const { position, direction } = state

  let styles: { [key: string]: string } = {
    top: `${positionYMap[position.y]}px`,
    left: `${positionXMap[position.x]}px`
  }
  if (direction === 'north') {
    styles = { ...styles, borderTopColor: 'green' }
  } else if (direction === 'east') {
    styles = { ...styles, borderRightColor: 'green' }
  } else if (direction === 'south') {
    styles = { ...styles, borderBottomColor: 'green' }
  } else if (direction === 'west') {
    styles = { ...styles, borderLeftColor: 'green' }
  }

  if (index === totalStates - 1) {
    styles = { ...styles, animation: 'fadein 0.5s forwards', animationDelay: `${index}s` }
  } else if (index >= 0) {
    styles = { ...styles, animation: 'fadeinout 1s forwards', animationDelay: `${index}s` }
  }
  return <div
    key={index * Math.random()}
    id={`${position.x},${position.y}`}
    style={{ ...styles }}
    className={'rover-cell'}
  >
    {state.position.x},{state.position.y}
  </div>
}

const positionYMap: { [key: number]: number } = {
  0: 290,
  1: 220,
  2: 150,
  3: 80,
  4: 10
}

const positionXMap: { [key: number]: number } = {
  0: 10,
  1: 80,
  2: 150,
  3: 220,
  4: 290
}

export default RoverCell
