import { Land } from './Land'
import { Position } from './Position'
import { Direction } from './Direction/Direction'
import { Command } from './Command'

export class Rover {
  constructor(private land: Land, private position: Position, private direction: Direction) {
  }

  move(commands: Command[]) {
    const states: { position: Position, direction: Direction }[] = []
    states.push({ position: this.getPosition(), direction: this.getDirection() })
    for (const command of commands) {
      if (command.isMoveForward()) {
        this.moveForward()
        states.push({ position: this.getPosition(), direction: this.getDirection() })
      } else if (command.isMoveBackward()) {
        this.moveBackward()
        states.push({ position: this.getPosition(), direction: this.getDirection() })
      } else if (command.isTurnRight()) {
        this.turnRight()
        states.push({ position: this.getPosition(), direction: this.getDirection() })
      } else if (command.isTurnLeft()) {
        this.turnLeft()
        states.push({ position: this.getPosition(), direction: this.getDirection() })
      }
    }
    return states
  }

  private moveForward() {
    this.position = this.getDirection().moveForward(this.getPosition())
  }

  private moveBackward() {
    this.position = this.getDirection().moveBackward(this.getPosition())
  }

  private turnRight() {
    this.direction = this.getDirection().turnRight()
  }

  private turnLeft() {
    this.direction = this.getDirection().turnLeft()
  }

  getPosition() {
    return this.position
  }

  getDirection() {
    return this.direction
  }
}
