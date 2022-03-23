// 컨테이너

import ProductWriteUI from "./ProductWrite.presenter";

import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.queries";


export default function ProductWrite(props){

  const router = useRouter()

  const [seller, setSeller] = useState("")
  const [name, setName] = useState("")
  const [detail, setDetail] = useState("")
  const [price, setPrice] = useState("")

  const [callProduct] = useMutation(CREATE_PRODUCT)
  const [updateProduct] = useMutation(UPDATE_PRODUCT)

  const onClickUpdate = async () => {
    const result = await updateProduct({
      variables: {
        productId: router.query.productId, 
        updateProductInput: {
          name: name, 
          detail: detail, 
          price: price }}
    })
    router.push(`/08-01-components/${router.query.productId}`)
    alert('게시글 수정에 성공하였습니다!')
  }

  const onClickCreate = async () => {
    try {
      const result = await callProduct({
        variables: {
          seller: seller,
          createProductInput:{ name: name, detail: detail, price: price }
        }
      })
      alert("게시글 등록에 성공했어요. 상세페이지로 이동합니다!")
      router.push(`/08-01-components/${result.data.createProduct._id}`)
    } catch (error){
      alert (error.message)
    }
  }

  const onChangeSeller = (event) => {
    setSeller(event.target.value)
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeDetail = (event) => {
    setDetail(event.target.value)
  }

  const onChangePrice = (event) => {
    setPrice(parseInt(event.target.value)) // 실수로 한글 입력해도 받지 않음
    // setPrice(event.target.valueAsNumber) // 코드리뷰 받은 것1
    // setPrice(event.target.value) // 이렇게 쓸 땐 price: Number(price) 아니면 parseInt(price)로 사용
    // setPrice(Number(event.target.value)) // 이것도 맞음
  }

  return (
    <ProductWriteUI 
    onClickUpdate={onClickUpdate}
    onClickCreate={onClickCreate}
    onChangeSeller={onChangeSeller}
    onChangeName={onChangeName}
    onChangeDetail={onChangeDetail}
    onChangePrice={onChangePrice}
    isEdit={props.isEdit}
    />
  )
}