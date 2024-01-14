import { Command } from '../domain/Command'
import { Rover } from '../domain/Rover'
import { Land } from '../domain/Land'
import { Position } from '../domain/Position'
import { North } from '../domain/Direction/North'

export class MoveMarsRover {
  private rover: Rover

  constructor() {
    const land = new Land(5, 5)
    const position = new Position(2, 2)
    const direction = new North()
    this.rover = new Rover(land, position, direction)
  }

  run(commands: Command[]) {
    return this.rover.move(commands)
  }
}
