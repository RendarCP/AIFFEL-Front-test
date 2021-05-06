import styled from 'styled-components'

export const Content = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word; 
  line-height: 1.2em;
  height: 3.6em; 
`