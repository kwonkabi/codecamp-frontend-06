// 여기는 컨테이너 컴포넌트

import { useState } from 'react'
import { useMutation } from '@apollo/client'

import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { useRouter } from 'next/router'

export default function BoardWrite(props){
  // 여기는 페이지명 중요!
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)

  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")
  
  const [data, setData] = useState("")
  const [callApi] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const onClickUpdate = async () => {
    const result = await updateBoard({
      variables: {number: Number(router.query.mynumber), writer: myWriter, title: myTitle, contents: myContents }
    })
    router.push(`/08-05-boards/${router.query.mynumber}`)
    alert('게시글 수정에 성공하였습니다!')
  }

  const callGraphqlApi = async () => {
    const result = await callApi({
      variables: { writer: myWriter, title: myTitle, contents: myContents }
    })
    router.push(`/08-05-boards/${result.data.createBoard.number}`)
    alert('게시글 등록에 성공하였습니다!')
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
    onClickUpdate={onClickUpdate}
    callGraphqlApi={callGraphqlApi}
    isActive={isActive}
    isEdit={props.isEdit}
    />
  )
}
