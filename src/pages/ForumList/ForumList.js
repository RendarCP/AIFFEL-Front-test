import React from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Spacer from '../../components/Spacer/Spacer'

function ForumList(){
  return(
    <div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 40px 0 40px'}}>
        <div style={{ width: '100%'}}>
          <Input />
        </div>
        <Spacer right={30} />
        <div style={{ marginRight: 40 }}>
          <Button title="검색"/>
        </div>
      </div>
    </div>
  )
}

export default ForumList