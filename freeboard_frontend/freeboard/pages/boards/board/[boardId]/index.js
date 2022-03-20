import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      _id
      writer
      title
      contents
      # youtubeUrl
      likeCount
      dislikeCount
      # images
      # boardAddress {
      #   _id
      #   zipcode
      #   address
      #   addressDetail
      #   createdAt
      #   updatedAt
      #   deletedAt
      #  }
      # user
      createdAt
      updatedAt
      # deletedAt
    }
  }
`

import { Link, LinkImg, ContentsWrapper, Date, DislikeCount, DislikeImg, DislikeWrapper, LikeDislikeWrapper, LikeCount, LikeImg, LikeWrapper, Location, LocationImg, MainWrapper, MainContent, Name, PostInfo, SubContent, SubjectWrapper, SubWrapper, Wrapper, WriterInfo1, WriterInfo2, WriterWrapper, LocationDetail, LocationDetailTextbox, WriterInfo2Icon, WriterProfileImg } from '../../../../styles/routed'


const DynamicRoutedBoardPage = () => {

  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId }
  })

  console.log(data)


  return (
    <>
    {(data) ? 
      <Wrapper>
        <WriterWrapper>
          <WriterInfo1>
            <WriterProfileImg src=''></WriterProfileImg>
            <PostInfo>
              <Name>{data?.fetchBoard.writer}</Name>
              <Date>Date: {(((data?.fetchBoard.createdAt).slice(0, 10)).replace('-','.')).replace('-','.')}</Date>
            </PostInfo>
          </WriterInfo1>
          <WriterInfo2>
            <LocationDetail>
              <LocationDetailTextbox></LocationDetailTextbox>
            </LocationDetail>
            <WriterInfo2Icon>
              <Link>
                <LinkImg src=''></LinkImg>
              </Link>
              <Location>
                <LocationImg src=''></LocationImg>
              </Location>
            </WriterInfo2Icon>
          </WriterInfo2>
        </WriterWrapper>
        <SubjectWrapper></SubjectWrapper>
        <MainWrapper>
          <MainContent></MainContent>
        </MainWrapper>
        <ContentsWrapper></ContentsWrapper>
        <SubWrapper>
          <SubContent></SubContent>
        </SubWrapper>
        <LikeDislikeWrapper>
          <LikeWrapper>
            <LikeImg></LikeImg>
            <LikeCount></LikeCount>
          </LikeWrapper>
          <DislikeWrapper>
            <DislikeImg></DislikeImg>
            <DislikeCount></DislikeCount>
          </DislikeWrapper>
        </LikeDislikeWrapper>
      </Wrapper> : 
      <div>loading</div>
    }
    </>
  )
}

export default DynamicRoutedBoardPage