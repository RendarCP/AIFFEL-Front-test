import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

// component
import Button from '../../components/Button/Button';
import Spacer from '../../components/Spacer/Spacer'
import Tag from '../../components/Tag/Tag'
import PopUp from '../../components/PopUp/PopUp'

function ForumDetail({ history }) {
  const { id } = useParams();
  const [ list, setlist ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ like, setLike] = useState(false)
  const [ popup, setPopUp ] = useState(false)

  useEffect(()=> {
    axios.get(`http://localhost:5000/forum/${id}`)
    .then(res => {
      setlist(res.data)
      setLoading(true)
      setLike(res.data.isLiked)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  // 좋아요 기능
  const onCickLike = () => {
    axios.patch(`http://localhost:5000/forum/${id}`,
      {isLiked: !like})
      .then( res => {
        console.log('res',res)
        setLike(!like)
      })
      .catch( err => {
        console.log(err)
      })
  }

  const onClickDelete = () => {
    setPopUp(true)
    // axios.delete(`http://localhost:5000/forum/${id}`)
    // .then(res => {
    //   history.push('/forum')
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }

  const onClickConfirm = () => {
    axios.delete(`http://localhost:5000/forum/${id}`)
    .then(res => {
      history.push('/forum')
    })
    .catch(err => {
      console.log(err)
    })
  }

  const onClickCancel = () => {
    setPopUp(false)
  }

  return(
    console.log(like),
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent:'center', 
      alignItems: 'center',
      marginTop: 50,
      padding: '0 300px'
    }}>
      
      {/* 제목 영역 */}
      <div style={{ width: '100%'}}>
        <div style={{ fontWeight: 'bold', fontSize: 30 }}>제목</div>
        <div>{list.title}</div>
      </div>

      {/* 태그 영역 */}
      <Spacer top={50} />
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap'}}>
        <div style={{ fontWeight: 'bold', fontSize: 30 }}>태그</div>
        <Spacer right={20} /> 
        {
          loading ? 
          <Tag name={list.tag.name} color={list.tag.color} /> : null
        }
      </div>

      {/* 본문 영역 */}
      <Spacer top={50} />
      <div style={{ width: '100%'}}>
        <div style={{ fontWeight: 'bold', fontSize: 30 }}>본문</div>
        <div>{list.content}</div>
      </div>

      {/* 액션 영역 */}
      <Spacer top={50} />
      <div style={{ width: '100%', display: 'flex' }}>
        <div 
          onClick={onCickLike}
          style={{ 
          border: '1px solid black', 
          borderRadius: 10,
          padding: 30,
          }}>
          {like ? "좋아요 취소" : "좋아요" }
        </div>
        <Spacer left={30} />
        <div 
          onClick={onClickDelete}
          style={{
            border: '1px solid red',
            borderRadius: 10,
            padding: 30,
          }}>
          삭제
        </div>
      </div>
      {
        popup ? 
        <PopUp title="삭제하시겠습니까?"
          confirm={onClickConfirm}
          cancel={onClickCancel}
        /> : null
      }
    </div>
  )
}

export default ForumDetail
