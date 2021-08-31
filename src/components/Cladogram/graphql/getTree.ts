import { gql } from '@apollo/client';

const GET_TREE = gql`
  fragment clade on Clade {
    name
    id
    extant
    hasChildren
    parentId
    leaves   
  }

  query getTree($id: ID!) {
    tree(id: $id, depth: 5) {
      ...clade
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
