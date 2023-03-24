import { gql } from '@apollo/client';

const GET_CLADE = gql`
  mutation updateClade($id: ID!, $data: CladeInput!) {
    updateClade(id: $id, data: $data) {
      success
    }
  }
`;

export default GET_CLADE;
