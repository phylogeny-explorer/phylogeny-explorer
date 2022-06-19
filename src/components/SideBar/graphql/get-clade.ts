import { gql } from '@apollo/client';

const GET_CLADE = gql`
  query getClade($id: ID!) {
    clade2(id: $id) {
      id
      name
      rank
      parentId
      imageUrl
      characteristics {
        name
        value
      }
    }
  }
`;

export default GET_CLADE;
