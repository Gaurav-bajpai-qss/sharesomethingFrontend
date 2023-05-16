import { gql } from "@apollo/client";

export const GetPosts = gql`
  query {
    getAllPost {
      id
      title
      discription
    }
  }
`;
export const getCategory = gql`
  query {
    getAllCategory {
      id
      title
      img
    }
  }
`;

export const getAllProducts = gql`
  query {
    showProduct {
      discription
      name
      id
      image {
        url
      }
      price
      quantity
      status
    }
  }
`;
