import { Direction } from './Direction'
import { West } from './West'
import { East } from './East'
import { Position } from '../Position'

export class North extends Direction {
  turnLeft() {
    return new West()
  }

  turnRight() {
    return new East()
  }

  moveForward(position: Position): Position {
    return new Position(position.getX(), position.getY() + 1)
  }

  moveBackward(position: Position): Position {
    return new Position(position.getX(), position.getY() - 1)
  }

  isNorth(): boolean {
    return true
  }

  getName(): string {
    return North.name
  }
}
