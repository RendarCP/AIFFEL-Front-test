import React from 'react'

function Button(props) {
  return(
    <div 
    onClick={props.click}
    style={{ 
      width: '100%',
      backgroundColor: '#f6be44',
      borderRadius: 10,
      padding: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#000000',
      fontWeight: 'bold',
      fontSize: 15
    }}>
      {props.title}
    </div>
  )
}

export default Button