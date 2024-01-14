import axios from 'axios'

export const MoveRover = async (commands: string) => {
  return await axios.get(`http://localhost:3005/?commands=${commands}`)
}
