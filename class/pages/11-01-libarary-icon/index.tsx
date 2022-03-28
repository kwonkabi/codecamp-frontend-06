import styled from "@emotion/styled/types/base"
import { DeleteOutlined } from "@ant-design/icons"

const MyIcon = styled(DeleteOutlined)`
  font-size: 50px;
  color: red;
`

export default function LibraryIconPage(){
  // return <DeleteOutlined />
  return <MyIcon />
}