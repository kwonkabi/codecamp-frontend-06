import styled from '@emotion/styled'

export const Writer = styled.input`
border-color: red;
`

export const Title = styled.input`
  border-color: yellow;
`

export const Contents = styled.input`
  border-color: green;
`

export const Button = styled.button`
  background-color: ${(props)=>props.isActive ? "skyblue" : "none"}
`