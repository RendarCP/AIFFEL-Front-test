import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 2px solid;
  margin-bottom: 20px;
`
export const Profile = styled.div`
  display: flex;
  height: 100%;
  padding: 10;
  flex-direction: row;
  align-items: center;
  margin-right: 100px;
  &: hover {
    background-color: gray;
  }
`