import { Position } from '../Position'

export abstract class Direction {
  abstract turnLeft(): Direction;
  abstract turnRight(): Direction;
  abstract moveForward(position: Position): Position;
  abstract moveBackward(position: Position): Position;

  isNorth(): boolean {
    return false
  }

  isSouth(): boolean {
    return false
  }

  isEast(): boolean {
    return false
  }

  isWest(): boolean {
    return false
  }
}
