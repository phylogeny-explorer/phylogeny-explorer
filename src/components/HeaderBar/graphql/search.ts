import { gql } from 'apollo-boost';

const SEARCH = gql`
  query search($value: String!) {
    search(value: $value) {
      id
      name
    }
  }
`;

export default SEARCH;
