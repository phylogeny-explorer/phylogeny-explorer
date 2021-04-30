import { gql } from '@apollo/client';

const MRCA = gql`
  query mrca($clade1: String!, $clade2: String!) {
    mrca(clade1: $clade1, clade2: $clade2) {
      id
      name
    }
  }
`;

export default MRCA;
