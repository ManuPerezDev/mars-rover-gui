import { South } from '../../../MarsRover/domain/Direction/South'
import { West } from '../../../MarsRover/domain/Direction/West'
import { East } from '../../../MarsRover/domain/Direction/East'

describe('South test', () => {
  it('should turn left', () => {
    const south = new South()
    const east = south.turnLeft()
    expect(east).toBeInstanceOf(East)
  })
  it('should turn right', () => {
    const south = new South()
    const west = south.turnRight()
    expect(west).toBeInstanceOf(West)
  })
})
