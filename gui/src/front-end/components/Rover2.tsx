import RoverCell from './RoverCell'
import { RoverState } from './RoverLayout'

export const Rover2 = (props: { states: RoverState[] }) => {
  const { states } = props
  return (
    <div>
      {states.map((state, index) => {
        return (
          <RoverCell state={state} index={index} totalStates={props.states.length}/>
        )
      })}
    </div>
  )
}
