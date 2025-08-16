import {useGetFormQuery,GetFormQuery, GetFormQueryVariables } from "../generated/graphql";

export const useFetchFormContact = () => {
        const { data, error,isFetching } = useGetFormQuery<GetFormQuery,GetFormQueryVariables>()
        console.log(data);
    return { data, isFetching, error };
};