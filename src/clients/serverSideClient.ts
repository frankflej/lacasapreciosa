import { GraphQLClient } from "graphql-request";

import { getSdk } from "../generated/backendGraphql";

const { HASURA_URL } = process.env;
export const getServerClient = async () => {

  const client = new GraphQLClient('https://evolving-frog-66.hasura.app/v1/graphql');
  return getSdk(client);
};