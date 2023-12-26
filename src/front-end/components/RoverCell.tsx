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
    top: `${positionYMap[position.getY()]}px`,
    left: `${positionXMap[position.getX()]}px`
  }
  if (direction.isNorth()) {
    styles = { ...styles, borderTopColor: 'green' }
  } else if (direction.isEast()) {
    styles = { ...styles, borderRightColor: 'green' }
  } else if (direction.isSouth()) {
    styles = { ...styles, borderBottomColor: 'green' }
  } else if (direction.isWest()) {
    styles = { ...styles, borderLeftColor: 'green' }
  }

  const className = 'rover-cell'
  if (index === totalStates - 1) {
    styles = { ...styles, animation: 'fadein 0.5s forwards', animationDelay: `${index}s` }
  } else if (index >= 0) {
    styles = { ...styles, animation: 'fadeinout 1s forwards', animationDelay: `${index}s` }
  }
  return <div
    key={index}
    id={`${position.getX()},${position.getY()}`}
    style={{ ...styles }}
    className={className}
  >
    {state.position.getX()},{state.position.getY()}
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
