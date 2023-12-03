import { Direction } from '../../mars-rover/src/domain/Direction/Direction'
import { Position } from '../../mars-rover/src/domain/Position'
import './RoverCell.css'

type RoverCellProps = {
  state: { position: Position, direction: Direction }
}

const RoverCell = (props: RoverCellProps) => {
  let styles: { [key: string]: string } = {}
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

export default RoverCell
