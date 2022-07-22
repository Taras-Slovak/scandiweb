import { gql } from '@apollo/client';

export const GET_ALL_QUERY = gql`
  query GetAllData {
    categories {
      name
      products{
        id
        name
        inStock
        gallery
        description
        category
        attributes{
          id
          name
          type
          items{
            displayValue
            value
            id
          }
        }
        prices{
          currency{
            label
            symbol
          }
        }
        brand
      }
    }
  }
`;

export const GET_CATEGORY_QUERY = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;
