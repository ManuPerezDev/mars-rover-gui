import { North } from '../../../MarsRover/domain/Direction/North'
import { West } from '../../../MarsRover/domain/Direction/West'
import { South } from '../../../MarsRover/domain/Direction/South'

describe('West test', () => {
  it('should turn left', () => {
    const west = new West()
    const south = west.turnLeft()
    expect(south).toBeInstanceOf(South)
  })
  it('should turn right', () => {
    const west = new West()
    const north = west.turnRight()
    expect(north).toBeInstanceOf(North)
  })
})
