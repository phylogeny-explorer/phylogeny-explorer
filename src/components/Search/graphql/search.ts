import { gql } from '@apollo/client';

const SEARCH = gql`
  query search($value: String!) {
    search2(value: $value) {
      id
      name
    }
  }
`;

export default SEARCH;
