import React, { useState } from 'react'
import DropList from '../../components/DropList/DropList'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

function EditForum({ history }) {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    tag: "",
  })
  const [taglist, setTaglist ] =useState(
    [
      { 
        "name": "general",
        "value": "general"
      },
      { 
        "name": "tip",
        "value": "tip"
      },
      { 
        "name": "bug",
        "value": "bug"
      },
      { 
        "name": "learn",
        "value": "learn"
      }
    ]
  )
  const onChange = (e) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name] : value 
    })
  }

  const onClickWrite = () => {
    if(inputs.title !== "" && inputs.content !== "", inputs.tag !== ""){
      history.push('/forum')
    }
    else{
      alert("모두 필수로 입력하셔야됩니다!")
    }
  }

  return(
    console.log(inputs),
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '50px 300px' }}>

      <div>포럼 작성</div>
      
      {/* 제목영역 */}
      <div style={{ width: '100%'}}>
        <div>제목</div>
        <Input
          name="title"
          value={inputs.title}
          onChange={onChange}
          placeholder="제목" 
        />
      </div>

      {/* 내용 영역 */}
      <div style={{ width: '100%', marginTop: 20 }}>
        <div>내용</div>
        <textarea
          name="content"
          value={inputs.content} 
          onChange={onChange}
          style={{
            width: '100%', 
            padding: 10, 
            resize: 'none',
            border: '1px solid black',
            borderRadius: 10,
          }}
          rows="30"
        />
      </div>

      {/* 태그 영역 */}
      <div style={{ width: '100%', marginTop: 30 }}>
        <div>태그</div>
        <select style={{ width: '100%',}}
          value={inputs.tag}
          name="tag"
          onChange={onChange}
        >
          {
            taglist.map(list => {
              return(
                <DropList name={list.name} value={list.value} />
              )
            })
          }
        </select>
      </div>

      {/* 버튼 영역입니다 */}
      <div style={{ width: '100%', marginTop: 30 }}>
        <Button title="포럼 작성" click={onClickWrite}/>
      </div>
    </div>
  )
}

export default EditForum