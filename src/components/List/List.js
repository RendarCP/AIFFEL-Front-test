import React from 'react'
import { Content } from './style'
import Tag from '../Tag/Tag'
import Spacer from '../Spacer/Spacer'
import Card from '../Card/Card'

import { Link } from 'react-router-dom'

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
                  textDecoration: 'none', 
                  borderRadius: 10}}>
                  <Link style={{ textDecoration: 'none', color: 'black' }} to={`/detail/${id+1}`}>
                    <Card title={list.title} content={list.content} />
                    <div style={{ padding: 10}}>
                      <Tag name={list.tag.name} color={list.tag.color} />
                    </div>
                  </Link>
                </div>
              <Spacer right={20} />
            </>
          )
        })
      }
    </>
  )
}

export default List