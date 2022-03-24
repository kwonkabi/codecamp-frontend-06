
import { ChangeEvent } from 'react'


// container
export interface IBoardWriteProps {
  isEdit: boolean
  data?: any // 다른 도구 존재함
}

export interface IMyVariables {
  number: number
  writer?: string
  title?: string
  contents?: string
}

// presenter
export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
  onClickUpdate: () => void
  callGraphqlApi: () => void
  isActive: boolean
  isEdit: boolean
  data: any
}

// styles
export interface ISubmitButtonProps {
  isActive: boolean
}
