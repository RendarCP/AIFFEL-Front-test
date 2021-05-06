import React from 'react'

function Input(props) {
  return(
    console.log(props),
    <input
      style={{ width: '100%', padding: 15, borderRadius: 5}}
      type={props.type}
      name={props.name}
      onChange={props.onChange}
      value={props.value} 
      placeholder={props.placeholder}
    />
  )
}

export default Input