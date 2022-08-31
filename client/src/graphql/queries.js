import { gql } from "@apollo/client";

export const ME = gql`
  query Query {
    me {
      id
      username
      email
      password
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
