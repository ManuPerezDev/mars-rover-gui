import { North } from '../../../MarsRover/domain/Direction/North'
import { West } from '../../../MarsRover/domain/Direction/West'
import { East } from '../../../MarsRover/domain/Direction/East'

describe('North test', () => {
  it('should turn left', () => {
    const north = new North()
    const west = north.turnLeft()
    expect(west).toBeInstanceOf(West)
  })
  it('should turn right', () => {
    const north = new North()
    const east = north.turnRight()
    expect(east).toBeInstanceOf(East)
  })
})
