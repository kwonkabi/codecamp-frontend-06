import { useState } from 'react'
import { useMutation } from '@apollo/client'

import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite(){
  // 여기는 페이지명 중요!
  const [isActive, setIsActive] = useState(false)

  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")
  
  const [data, setData] = useState("")
  const [callApi] = useMutation(CREATE_BOARD)
  
  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1") // rest-api 방식
    const result = await callApi({
      variables: { writer: myWriter, title: myTitle, contents: myContents }
    }) // graphql-api방식
    console.log(result)
    console.log(result.data.createBoard.message)
    setData(result.data.createBoard.message)
  }
  
  const onChangeWriter = (event) => {
    setMyWriter(event.target.value)
    if (event.target.value !== "" && myTitle !== "" && myContents !==""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  
  const onChangeTitle = (event) => {
    setMyTitle(event.target.value)
    if (myWriter !== "" && event.target.value !== "" && myContents !==""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  
  const onChangeContents = (event) => {
    setMyContents(event.target.value)
    if (myWriter !== "" && myTitle !== "" && event.target.value !==""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
    // 순서 없이 작성할 수 있기 때문에 모두 작성해 주어야 함.
  }

  return (
    <BoardWriteUI
    onChangeWriter={onChangeWriter}
    onChangeTitle={onChangeTitle}
    onChangeContents={onChangeContents}
    callGraphqlApi={callGraphqlApi}
    isActive={isActive}
    />
  )
}
