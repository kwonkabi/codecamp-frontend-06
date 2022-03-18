import axios from 'axios'

const RestGetPage = () => {
  
  const getRestApi = async () => {
    const result = await axios.get("https://koreanjson.com/users")
    console.log(result)
    // console.log(result.data[0].name) // 이정도
    // console.log(result.data[9].email) // jisoocity@naver.com
    // console.log(result.data[5].username) // jangwj2931
    // console.log(result.data[7].phone) //010-9311-9411
    // console.log(result.data[2].zipcode) // 05397
    console.log(result.data[8].website)
  }

  return (
    <>
      <button onClick={getRestApi}>REST-API 요청하기</button>
    </>
  )
}

export default RestGetPage