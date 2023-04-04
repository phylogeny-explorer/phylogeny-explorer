import { gql } from '@apollo/client';

const GET_IMAGES = gql`
  query getImages($name: String!) {
    images(name: $name) {
      title
      url
    }
  }
`;

export default GET_IMAGES;
