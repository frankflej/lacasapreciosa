type FetchOptions = {
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

type RequestInit = {
  headers: (HeadersInit & FetchOptions) | FetchOptions;
};

export const fetcher = <TData, TVariables>(
  query: string,

  variables?: TVariables,
  options?: RequestInit["headers"]
) => {
  return async (): Promise<TData> => {
    const { next, cache, ...restOptions } = options || {};
    const body = JSON.stringify({
      query,
      variables,
      options,
    });
    const res = await fetch(`https://evolving-frog-66.hasura.app/v1/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": 'j8X3FsWIiMY72bD9s82SdO0KVQnRzGX5xcD33P3RwNhKGD9L33nJ1WE1guSU1wpx',
        ...restOptions,
      },
      body,
      next,
      cache,
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];
      throw new Error(message);
    }
    return json.data;
  };
};
