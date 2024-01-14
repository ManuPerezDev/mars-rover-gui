import './RoverLayout.css'
import { useRef, useState } from 'react'
import Map from './Map'
import { Rover2 } from './Rover2'
import { AxiosResponse } from 'axios'

export type RoverState = {
  position: {
    x: number,
    y: number
  },
  direction: string
}

type Props = {
  rover: RoverState,
  moveRover: (commands: string) => Promise<AxiosResponse>
}

const RoverLayout = ({ rover, moveRover }: Props) => {
  const ref = useRef('')
  const [roverStates, setRoverRoverStates] = useState<RoverState[]>([{
    position: rover.position,
    direction: rover.direction
  }])

  async function handleSubmit(event: any) {
    if (ref.current === '') {
      return
    }

    moveRover(ref.current).then((response: AxiosResponse) => {
      setRoverRoverStates(response.data)
    }).catch((error) => {
      console.log(error)
    })

    event.preventDefault()
  }

  function handleChange(event: any) {
    ref.current = event.target.value
  }

  return (
    <div>
      <div className='grid-container'>
        <Map/>
        <Rover2 states={roverStates}/>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Commands:
          <input type='text' onChange={handleChange}/>
        </label>
        <input type='submit' value='Submit' disabled={false}/>
      </form>
    </div>
  )
}

export default RoverLayout
