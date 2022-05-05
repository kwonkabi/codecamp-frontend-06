import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn($userId: User!) {
    fetchUserLoggedIn(userId: $userId) {
      name
      email
      _id
      userPoint {
        _id
        amount
      }
    }
  }
`;

// export const FETCH_USER_LOGGED_IN = gql`
//   query fetchUserLoggedIn($user: User!) {
//     fetchUserLoggedIn(user: $user) {
//       user {
//         _id
//         email
//         name
//         userPoint {
//           _id
//           amount
//           user
//         }
//       }
//     }
//   }
// `;
