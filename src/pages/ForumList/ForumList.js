import React, { useState, useEffect } from 'react'

// component
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Spacer from '../../components/Spacer/Spacer'
import Tag from '../../components/Tag/Tag'
import List from '../../components/List/List'

import axios from 'axios'

function ForumList({ history }){
  const [ lists, setList ] = useState([])
  const [ search, setSearch ] = useState("")
  const [ count, setCount ] = useState(1)
  
  // 데이터 처리
  useEffect(() => {
    axios.get(`http://localhost:5000/forum?_page=${count}&_limit=5`)
    //axios.get("http://localhost:5000/forum")
    .then(res => {
      setList(res.data)
    })
    .catch(err => {
      console.log(err)
    })
    return () => {
      console.log('test')
    }
  }, [])

  // 검색 입력값 처리 
  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const onClick = () => {
    if(search !== ""){
      setList(lists.filter( list => list.title.includes(search)))
    }
    else{
      alert("검색어를 입력해주세요!")
    }
  }

  const onClickPage = (n) => {
    setCount(n)
    axios.get(`http://localhost:5000/forum?_page=${count}&_limit=5`)
    .then(res => {
      setList(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const onClickWrite = () => {
    console.log('clicked')
    history.push('/editforum')
  }

  return(
    <div>
      {/* 검색창 부분 */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 40px 0 40px'}}>
        <div style={{ width: '100%'}}>
          <Input 
            name="search" 
            value={search} 
            onChange={onChange}
            placeholder="검색어를 입력하세요"
          />
        </div>
        <Spacer right={60} />
        <div style={{ marginRight: 40 }}>
          <Button title="검색" click={onClick}/>
        </div>
      </div>
      
      <div style={{ position: 'absolute', right: 0, paddingRight: 100, marginTop: 20}}>
        <Button title="글작성" click={onClickWrite}/>
      </div>
      {/* 리스트 부분 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        padding: 40, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 50, 
      }}>
        <List lists={lists} />
      </div>
      <Pagination page={onClickPage} />
    </div>
  )
}

export default ForumList

function Pagination(props) {
  return(
    <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
      <ui style={{ border: '1px solid black', padding: 5}} onClick={()=>props.page(1)}>1</ui>
      <ui style={{ border: '1px solid black', padding: 5}} onClick={()=>props.page(2)}>2</ui>
      <ui style={{ border: '1px solid black', padding: 5}} onClick={()=>props.page(3)}>3</ui>
    </div>
  )
}