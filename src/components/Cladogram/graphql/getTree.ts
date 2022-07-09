import { gql } from '@apollo/client';

const GET_TREE = gql`
  fragment clade on Node {
    id
    name
    attributes {
      id
      hasChildren
      extant
    }
  }

  query getTree($id: ID!) {
    tree(id: $id, depth: 5) {
      ...clade
      attributes {
        lineage
      }
      children {
        ...clade
        children {
          ...clade
          children {
            ...clade
            children {
              ...clade
            }
          }
        }
      }
    }
  }
`;

export default GET_TREE;
