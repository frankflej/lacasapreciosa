import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      ['https://evolving-frog-66.hasura.app/v1/graphql']: {
        headers: { "x-hasura-admin-secret": 'j8X3FsWIiMY72bD9s82SdO0KVQnRzGX5xcD33P3RwNhKGD9L33nJ1WE1guSU1wpx' },
      },
    },
  ],
  overwrite: true,
  documents: "./src/graphql/**.graphql",
  generates: {
    "./src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
        {
          add: {
            content: `
            type FetchOptions = {
              cache?: RequestCache;
              next?: NextFetchRequestConfig;
            };
            
            type RequestInit = {
              headers: (HeadersInit & FetchOptions) | FetchOptions;
            };`,
          },
        },
      ],
      config: {
        reactQueryVersion: 5,
        legacyMode: false,
        exposeFetcher: true,
        exposeQueryKeys: true,
        addSuspenseQuery: true,
        fetcher: "../helpers/fetcher#fetcher",
        addInfiniteQuery: true,
      },
    },
    "./src/generated/backendGraphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
export default config;
