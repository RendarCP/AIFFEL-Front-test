import React from 'react'

function DropList(props) {
  return(
    <option key={props.name} value={props.value}>{props.value}</option>
  )
}

export default DropList