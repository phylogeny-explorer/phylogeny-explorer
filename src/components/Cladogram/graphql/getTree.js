import { gql } from 'apollo-boost';

const GET_TREE = gql`
  fragment clade on Clade {
    id
    name
    extant
  }

  query getTree($id: ID) {
    tree(id: $id, depth: 9) {
      root {
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
  }
`;

export default GET_TREE;
