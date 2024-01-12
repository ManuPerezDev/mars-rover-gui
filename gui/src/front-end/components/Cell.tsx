type CellProps = {
  x: number
  y: number
}

const Cell = (props: CellProps) => {
  return <div id={`${props.x},${props.y}`} className='grid-item'>{props.x},{props.y}</div>
}

export default Cell
