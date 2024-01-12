import './RoverLayout.css'
import Cell from './Cell'

const Map = () => {
  return (
    <>
      <Cell x={0} y={4}/>
      <Cell x={1} y={4}/>
      <Cell x={2} y={4}/>
      <Cell x={3} y={4}/>
      <Cell x={4} y={4}/>

      <Cell x={0} y={3}/>
      <Cell x={1} y={3}/>
      <Cell x={2} y={3}/>
      <Cell x={3} y={3}/>
      <Cell x={4} y={3}/>

      <Cell x={0} y={2}/>
      <Cell x={1} y={2}/>
      <Cell x={2} y={2}/>
      <Cell x={3} y={2}/>
      <Cell x={4} y={2}/>

      <Cell x={0} y={1}/>
      <Cell x={1} y={1}/>
      <Cell x={2} y={1}/>
      <Cell x={3} y={1}/>
      <Cell x={4} y={1}/>

      <Cell x={0} y={0}/>
      <Cell x={1} y={0}/>
      <Cell x={2} y={0}/>
      <Cell x={3} y={0}/>
      <Cell x={4} y={0}/>
    </>
  )
}

export default Map
