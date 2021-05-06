import React, { useState, useEffect } from 'react'

// component
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Spacer from '../../components/Spacer/Spacer'
import Tag from '../../components/Tag/Tag'
import List from '../../components/List/List'

import axios from 'axios'

function ForumList(){
  const [lists, setList] = useState([])
  useEffect(() => {
    console.log('화면에 나타났어요!')
    axios.get("http://localhost:5000/forum?_page=1&_limit=5")
    .then(res => {
      setList(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    
  }, [])
  return(
    console.log('list', lists),
    <div>
      {/* 검색창 부분 */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 40px 0 40px'}}>
        <div style={{ width: '100%'}}>
          <Input />
        </div>
        <Spacer right={60} />
        <div style={{ marginRight: 40 }}>
          <Button title="검색"/>
        </div>
      </div>
      
      {/* 리스트 부분 */}
      <div style={{ display: 'flex', flexDirection: 'row', padding: 40, justifyContent: 'center', alignItems: 'center' }}>
      {
        lists.map( (list,id) => {
          return(
            <>
              <div key={id} style={{ flexDirection: 'column', width: '100%'}}>
                <List title={list.title} content={list.content} />
                <Tag name={list.tag.name} color={list.tag.color} />
              </div>
              <Spacer right={20} />
            </>
          )
        })
      }
      </div>

    </div>
  )
}

export default ForumList