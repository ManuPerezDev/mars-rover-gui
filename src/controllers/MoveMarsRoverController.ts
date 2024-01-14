import { MoveMarsRover } from '../MarsRover/application/MoveMarsRover'
import { Request, Response } from 'express'
import { MoveForward } from '../MarsRover/domain/MoveForward'
import { MoveBackward } from '../MarsRover/domain/MoveBackward'
import { TurnLeft } from '../MarsRover/domain/TurnLeft'
import { TurnRight } from '../MarsRover/domain/TurnRight'

export class MoveMarsRoverController {
  constructor(readonly moveMarsRover: MoveMarsRover) {
  }

  run(req: Request, res: Response) {
    const rawCommands = req.query.commands as string
    const domainCommands = rawCommands.split('').map(command => {
      if (command === 'f') {
        return new MoveForward()
      } else if (command === 'b') {
        return new MoveBackward()
      } else if (command === 'l') {
        return new TurnLeft()
      } else if (command === 'r') {
        return new TurnRight()
      } else {
        throw new Error('Invalid command')
      }
    })

    const response = this.moveMarsRover.run(domainCommands)
    const jsonResponse = response.map(state => {
      return {
        position: {
          x: state.position.getX(),
          y: state.position.getY()
        },
        direction: state.direction.getName().toLowerCase()
      }
    })

    res.send(jsonResponse)
  }
}
