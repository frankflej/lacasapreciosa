import { GraphQLClient } from "graphql-request";

/**
 * You should always use this hook/function for making request queries for authentication purposes
 **/

const useClientSideClient = (byPassAuth?: boolean) => {
  const client = new GraphQLClient(
    // byPassAuth ? "/api/graphql/register" : "/api/graphql"
    "https://evolving-frog-66.hasura.app/v1/graphql"
  );
  return client;
};
export default useClientSideClient;