import { Command } from '../domain/Command'
import { Rover } from '../domain/Rover'
import { Land } from '../domain/Land'
import { Position } from '../domain/Position'
import { North } from '../domain/Direction/North'
import { InMemoryRoverRepository } from '../infrastructure/InMemoryRoverRepository'

export class MoveMarsRover {
  private rover: Rover

  constructor(private roverRepository: InMemoryRoverRepository) {
    if (this.roverRepository.load() !== null) {
      this.rover = this.roverRepository.load()!
    } else {
      const land = new Land(5, 5)
      const position = new Position(2, 2)
      const direction = new North()
      this.rover = new Rover(land, position, direction)
      this.roverRepository.save(this.rover)
    }
  }

  run(commands: Command[]) {
    return this.rover.move(commands)
  }
}
