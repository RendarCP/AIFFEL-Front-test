import React from 'react'
import { Content } from './style'

function List(props) {
  return(
    <div style={{ 
        border: '1px solid black', 
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
      {/* <div style={{ 
        overflow: 'hidden', 
        textOverflow: 'ellipsis',
        display: '-webkit-box',
         }}>
        {props.content}
      </div> */}
      <Content>
        {props.content}
      </Content>
    </div>
  )
}

export default List