import React from 'react'

function Spacer({top, right, left, bottom}) {
  return(
    <div style={{ 
      marginTop: top ? top : 0 ,
      marginLeft: left ? left : 0,
      marginRight: right ? right : 0,
      marginBottom: bottom ? bottom : 0,
      }}>
    </div>
  )
}

export default Spacer