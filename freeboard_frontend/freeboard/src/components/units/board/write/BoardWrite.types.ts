import { ChangeEvent } from 'react'

// container
export interface IBoardWriteProps {
  isEdit: boolean
  data?: any // 다른 도구 존재함
}


export interface ISubmitButtonProps {
  isActive: boolean
}

export interface IBoardWriteUIProps {
  isActive: boolean
  writerError: any
  passwordError: any
  titleError: any
  contentsError: any
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
  onClickSubmit: () => void
  onClickUpdate: () => void
  isEdit: boolean
}