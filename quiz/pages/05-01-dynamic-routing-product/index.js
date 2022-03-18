import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String, $createProductInput: CreateProductInput!){
      createProduct(seller: $seller, createProductInput: $createProductInput){
      _id
      number
      message
    }
  }
`

const CreateProductPage = () => {
  
  const router = useRouter()

  const [seller, setSeller] = useState("")
  const [name, setName] = useState("")
  const [detail, setDetail] = useState("")
  const [price, setPrice] = useState("")

  const [callProduct] = useMutation(CREATE_PRODUCT)

  const onClickCreate = async () => {
    try {
      const result = await callProduct({
        variables: {
          seller: seller,
          createProductInput:{ name: name, detail: detail, price: price }
        }
      })
      // console.log(result)
      // console.log(result.data.createProduct._id)
      // console.log(result.data.createProduct.number)
      // console.log(result.data.createProduct.message)
      alert("게시글 등록에 성공했어요. 상세페이지로 이동합니다!")
      router.push(`/05-02-dynamic-routed-product/${result.data.createProduct._id}`)
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
    <div>
      작성자: <input type="text" onChange={onChangeSeller}></input><br/>
      상품명: <input type="text" onChange={onChangeName}></input><br/>
      상품상세: <input type="text" onChange={onChangeDetail}></input><br/>
      가격: <input type="number" onChange={onChangePrice}></input><br/>
      <button onClick={onClickCreate}>상품 등록</button>
    </div>
  )
}

export default CreateProductPage