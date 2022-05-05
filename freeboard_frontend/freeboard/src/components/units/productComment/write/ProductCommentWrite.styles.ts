import styled from "@emotion/styled";

// export const CommentWrapper = styled.div`
//   width: 100%;
//   border: 2px solid gray;
//   background: none;
//   textarea {
//     width: 100%;
//     height: 120px;
//     border: 0;
//     border-bottom: 1px solid gray;
//     outline: 0;
//     padding: 5px 10px 10px;
//     resize: none;
//     background: none;
//     white-space: pre-wrap;
//   }
// `;

// export const UserInfo = styled.div`
//   width: 100%;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;

// export const UserImg = styled.img`
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   border: 0.5px solid #c7c7c7;
//   background: none;
// `;
// export const UserName = styled.div`
//   text-align: start;
//   line-height: 25px;
//   padding-left: 10px;
//   font-weight: 700;
//   font-size: 0.9rem;
//   text-transform: uppercase;
// `;
// export const CreateComment = styled.div`
//   position: relative;
//   width: 100%;
//   height: 37px;
//   text-align: end;
//   button {
//     position: absolute;
//     top: 45%;
//     right: 0;
//     transform: translate(0, -50%);
//     width: 70px;
//     height: 42px;
//     border: 0;
//     cursor: pointer;
//     &:hover {
//       background: #fad483;
//     }
//   }
// `;

export const CommentWriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 19px;
`;

export const CommentTextarea = styled.textarea`
  width: 100%;
  height: 147px;
  background-color: #e9e9e9;
  border: none;
  margin-bottom: 11px;
`;

export const CommentSubmitButton = styled.button`
  width: 116px;
  height: 42px;
  background-color: #ffe004;
  border: none;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`;
