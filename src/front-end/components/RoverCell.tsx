import { Direction } from '../../mars-rover/src/domain/Direction/Direction'
import { Position } from '../../mars-rover/src/domain/Position'
import './RoverCell.css'

type RoverCellProps = {
  state: { position: Position, direction: Direction }
}

const RoverCell = (props: RoverCellProps) => {
  let styles: { [key: string]: string } = {
    top: `${positionYMap[props.state.position.getY()]}px`,
    left: `${positionXMap[props.state.position.getX()]}px`
  }
  if (props.state.direction.isNorth()) {
    styles = { ...styles, borderTopColor: 'green' }
  } else if (props.state.direction.isEast()) {
    styles = { ...styles, borderRightColor: 'green' }
  } else if (props.state.direction.isSouth()) {
    styles = { ...styles, borderBottomColor: 'green' }
  } else if (props.state.direction.isWest()) {
    styles = { ...styles, borderLeftColor: 'green' }
  }
  return <div
    id={`${props.state.position.getX()},${props.state.position.getY()}`}
    style={styles}
    className='rover-cell'
  >
    {props.state.position.getX()},{props.state.position.getY()}
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
