import { useQuery, gql, useMutation } from '@apollo/client'
import styled from '@emotion/styled'


const FETCH_PRODUCTS = gql`
  query fetchProducts{
    fetchProducts{
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID){
    deleteProduct(productId: $productId){
      _id
      number
      message
    }
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  width: 15%;
`

const ColumnCheck =styled.div`
  width: 5%;
`

const DeleteBtn = styled.button`
  width: 15%;
`

export default function MapProductPage() {
  const [ deleteProduct ] = useMutation(DELETE_PRODUCT)
  const { data } = useQuery(FETCH_PRODUCTS)

  const onClickDelete = (event) => {
    deleteProduct({
      variables: { productId: (event.target.id) },
      refetchQueries: [{ query: FETCH_PRODUCTS }]
    })
  }

  return (

    <>
      {data?.fetchProducts.map((el) => (
        <Row key={el._id}>
          <ColumnCheck><input type="checkbox" /></ColumnCheck>
          <Column>판매자: {el.seller}</Column>
          <Column>상품명: {el.name}</Column>
          <Column>상품상세: {el.detail}</Column>
          <Column>가격: {el.price}</Column>
          <Column>작성일: {el.createdAt}</Column>
          <Column><DeleteBtn id={el._id} onClick={onClickDelete}>삭제</DeleteBtn></Column>
        </Row>
      ))}
    </>
  )
}