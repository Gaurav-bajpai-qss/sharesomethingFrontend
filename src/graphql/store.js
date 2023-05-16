import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://sharesomething.onrender.com/graphql",
  cache: new InMemoryCache(),
});
