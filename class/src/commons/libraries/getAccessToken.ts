import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken() {
  try {
    const graphqlClient = new GraphQLClient(
      "https://backend06.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );

    // axios로 하는 방법
    // axios.post("http://backend06.codebootcamp.co.kr/graphql",{
    //     query:`
    //     mutation restoreAccessToken {
    //         restoreAccessToken {
    //           accessToken
    //         }
    //       }
    //     `
    // })

    const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN);
    // result.data. 할 필요 없음!
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
  }
}
