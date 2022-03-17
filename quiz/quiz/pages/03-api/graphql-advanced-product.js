import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    ){
    createProductInput(
      name: String,
      detail: String,
      price: Int
    ){
      _id
      number
      message
    }
  }
`


const BoardMutationPage= () => {
  
  const [seller, setSeller] = useState("")
  const [name, setName] = useState("")
  const [detail, setDetail] = useState("")
  const [price, setPrice] = useState("")

  const [callApi] = useMutation(CREATE_PRODUCT)

  const onClickRequest = async () => {
    const result = await callApi({
      variables: { $seller: seller, name: name, detail: detail, price: price}
    })
    console.log(result)
    console.log(result.data.createProduct._id)
    console.log(result.data.createProduct.number)
    console.log(result.data.createProduct.message)
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
    setPrice(event.target.value)
  }

  return (
    <div>
      작성자: <input type="text" onChange={onChangeSeller}></input><br/>
      상품명: <input type="text" onChange={onChangeName}></input><br/>
      상품상세: <input type="text" onChange={onChangeDetail}></input><br/>
      가격: <input type="number" onChange={onChangePrice}></input><br/>
      <button onClick={onClickRequest}>GRAPHQL-API 요청하기</button>
    </div>
  )
}

export default BoardMutationPage