import React, { useState, useEffect } from 'react'

// component
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Spacer from '../../components/Spacer/Spacer'
import Tag from '../../components/Tag/Tag'
import List from '../../components/List/List'

import axios from 'axios'
import styled from 'styled-components';

function ForumList({ history }){
  const [ lists, setList ] = useState([])
  const [ search, setSearch ] = useState("")
  const [ count, setCount ] = useState(1)
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ postsPerPage, setPostsPerPage ] = useState(5)
  
  // 데이터 처리
  useEffect(() => {
    axios.get(`http://localhost:5000/forum`)
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

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
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
        <List lists={currentPosts(lists)} />
      </div>
      <Pagination page={onClickPage} postPerPage={postsPerPage} totalPosts={lists.length} paginate={setCurrentPage}/>
    </div>
  )
}

export default ForumList

function Pagination({ page, postPerPage, totalPosts, paginate}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts /postPerPage); i++){
    pageNumbers.push(i);
  }
  return(
    <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}>
      {
        pageNumbers.map(number => {
          return(
            <ui style={{ border: '1px solid black', padding: 5}} onClick={()=>paginate(number)}>{number}</ui>
          )
        })
      }
    </div>
  )
}