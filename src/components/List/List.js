import React from 'react'
import { Content } from './style'
import Tag from '../Tag/Tag'
import Spacer from '../Spacer/Spacer'
import Card from '../Card/Card'

function List(props) {
  return(
    <>
      {
        props.lists.map( (list,id) => {
          return(
            <>
              <div key={id} style={{ 
                flexDirection: 'column', 
                width: '100%', 
                border:'1px solid #000000', 
                borderRadius: 10}}>
                <Card title={list.title} content={list.content} />
                <div style={{ padding: 10}}>
                  <Tag name={list.tag.name} color={list.tag.color} />
                </div>
              </div>
              <Spacer right={20} />
            </>
          )
        })
      }
    </>
    // <div style={{ 
    //     display: 'flex', 
    //     flexDirection: 'column', 
    //     justifyContent: 'center', 
    //     alignItems: 'center',
    //     height: 300,
    //     wordWrap: 'break-word',
    //    }}>
    //   <div>
    //     {props.title}
    //   </div>
    //   <Content>
    //     {props.content}
    //   </Content>
    // </div>
  )
}

export default List