import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import  BoardWriteUI  from '../write/BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'


export default function BoardWrite() {

  const router = useRouter()

  const [isActive, setIsActive] = useState(false)
  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")

  const [callApi] = useMutation(CREATE_BOARD)

  const callGraphqlApi = async () => {
    try {
      const result = await callApi({
        variables: { writer: myWriter, title: myTitle, contents: myContents }
      })
      console.log(result.data.createBoard.number)
      alert("게시글 등록에 성공했어요!")
      alert("상세페이지로 이동해 볼까요?")
      router.push(`/06-02-container-presenter-routed/${result.data.createBoard.number}`)
    } catch (error){
      alert (error.message)
    }
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
  }

  return (
    <BoardWriteUI
    callGraphqlApi = { callGraphqlApi }
    onChangeWriter = { onChangeWriter }
    onChangeTitle = { onChangeTitle }
    onChangeContents = { onChangeContents }
    isActive = { isActive }
    />
  )
}