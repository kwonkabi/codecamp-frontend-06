import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID){
    fetchProduct(productId: $productId){
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`

const FetchProductPage = () => {

  const router = useRouter()
  // console.log(router)

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId } // 여기서 productId는 [productId]라서
  })

  console.log(data)

  return (
    <>
      {/* jsx 삼항연산자 */}
      {(data) ?
        <div>
          <div>판매자: {data?.fetchProduct.seller}</div>
          <div>상품명: {data?.fetchProduct.name}</div>
          <div>상품상세: {data?.fetchProduct.detail}</div>
          <div>가격: {data?.fetchProduct.price}</div>
          <div>작성일: {data?.fetchProduct.createdAt}</div>
        </div> :
        <div>loading...</div>
      }
    </>
  )
}

export default FetchProductPage