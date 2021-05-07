import React from 'react'

function Tag(props) {
  return(
    <div style={{ 
      borderRadius: 5, 
      backgroundColor: props.color,
      textAlign: 'center',
      padding: 10 }}>
      {props.name}
    </div>
  )
}

export default Tag