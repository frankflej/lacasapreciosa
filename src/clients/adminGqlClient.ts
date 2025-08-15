import { GraphQLClient } from "graphql-request";

import { getSdk } from "../generated/backendGraphql";

// const { HASURA_URL, HASURA_SECRET } = process.env;

// if (!HASURA_URL) throw new Error("Missing HASURA_URL");
// if (!HASURA_SECRET) throw new Error("Missing HASURA_SECRET");

const gqlClient = new GraphQLClient('https://wondrous-caribou-87.hasura.app/v1/graphql');
gqlClient.setHeader("x-hasura-admin-secret", 'UNAIDWv5FxeVTNVFBkaW6Bf8VYAe4P5R7fGRefQVC2MakB6Za5JiQw3tMxrO5EZ0');
const adminGqlClient = getSdk(gqlClient);

export default adminGqlClient;