import { gql } from '@apollo/client';

const GET_CLADE = gql`
  query getClade($id: ID!) {
    clade(id: $id) {
      id
      name
      authorship {
        name
        year
        isOriginalAuthor
        sources
      }
      rank
      parentId
      imageUrl
      characteristics {
        name
        value
      }
      commonNames
      extant
      lineage {
        id
        name
        rank
      }
      children {
        id
        name
      }
      sources {
        id
        name
      }
    }
  }
`;

export default GET_CLADE;
