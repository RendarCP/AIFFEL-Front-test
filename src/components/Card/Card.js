import React from 'react'
import { Content } from './style'

function Card(props) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      height: 300,
      wordWrap: 'break-word',
     }}>
    <div>
      {props.title}
    </div>
    <Content>
      {props.content}
    </Content>
  </div>
  )
}

export default Card