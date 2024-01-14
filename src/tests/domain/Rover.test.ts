import { Rover } from '../../MarsRover/domain/Rover'
import { Land } from '../../MarsRover/domain/Land'
import { Position } from '../../MarsRover/domain/Position'
import { North } from '../../MarsRover/domain/Direction/North'
import { MoveForward } from '../../MarsRover/domain/MoveForward'
import { TurnRight } from '../../MarsRover/domain/TurnRight'
import { East } from '../../MarsRover/domain/Direction/East'

describe('Rover should', () => {
  const initialPosition = new Position(1, 1)
  const initialDirection = new North()

  it('should read a list of commands', () => {
    const land = new Land(10, 10)
    const rover = new Rover(land, initialPosition, initialDirection)
    const commands = [new MoveForward(), new MoveForward()]

    const roverStates = rover.move(commands)

    expect(roverStates).toHaveLength(3)
    expect(roverStates[0]).toStrictEqual({ position: initialPosition, direction: initialDirection })
    expect(roverStates[1]).toStrictEqual({ position: new Position(1, 2), direction: initialDirection })
    expect(roverStates[2]).toStrictEqual({ position: new Position(1, 3), direction: initialDirection })
  })

  it('should read a list of commands and take into account direction', () => {
    const land = new Land(10, 10)
    const rover = new Rover(land, initialPosition, initialDirection)
    const commands = [new MoveForward(), new TurnRight(), new MoveForward()]

    const roverStates = rover.move(commands)

    expect(roverStates).toHaveLength(4)
    expect(roverStates[0]).toStrictEqual({ position: initialPosition, direction: initialDirection })
    expect(roverStates[1]).toStrictEqual({ position: new Position(1, 2), direction: new North() })
    expect(roverStates[2]).toStrictEqual({ position: new Position(1, 2), direction: new East() })
    expect(roverStates[3]).toStrictEqual({ position: new Position(2, 2), direction: new East() })
  })
})
