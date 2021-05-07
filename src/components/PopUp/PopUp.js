import React from 'react'
import Button from '../Button/Button';
import Spacer from '../Spacer/Spacer'
import { PopUpContainer } from './style'

function PopUp({ title, confirm, cancel }) {
  return(
    <PopUpContainer>
      <div style={{ fontWeight: 'bold', fontSize: 30}}>{title}</div>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        width: '80%',
        marginTop: 30,
      }}>
        <Button color='green' title="확인" click={confirm} />
        <Spacer left={20} right={20} />
        <Button color='red' title="취소" click={cancel} />
      </div>
    </PopUpContainer>
  )
}

export default PopUp