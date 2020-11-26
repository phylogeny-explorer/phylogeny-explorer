import { gql } from '@apollo/client';

const GET_TREE = gql`
  fragment clade on Clade {
    id
    name
    extant
    hasChildren
    parentId
  }

  query getTree($id: ID!) {
    tree(id: $id, depth: 9) {
      ...clade
      children {
        ...clade
        children {
          ...clade
          children {
            ...clade
            children {
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
        }
      }
    }
  }
`;

export default GET_TREE;
