import { South } from './South'
import { North } from './North'
import { Direction } from './Direction'
import { Position } from '../Position'

export class East extends Direction {
  turnLeft(): Direction {
    return new North()
  }

  turnRight (): Direction {
    return new South()
  }

  moveForward (position: Position): Position {
    return new Position(position.getX() + 1, position.getY())
  }

  moveBackward (position: Position): Position {
    return new Position(position.getX() - 1, position.getY())
  }

  isEast(): boolean {
    return true;
  }
}

