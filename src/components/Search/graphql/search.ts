import { gql } from '@apollo/client';

const SEARCH = gql`
  query search($value: String!) {
    search(value: $value) {
      id
      name
    }
  }
`;

export default SEARCH;
