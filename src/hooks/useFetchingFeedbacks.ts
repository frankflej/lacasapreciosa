import {useGetFeedbacksQuery,GetFeedbacksQuery, GetFeedbacksQueryVariables } from "../generated/graphql";

export const useFetchingFeedbacks = () => {
        const { data, error,isFetching } = useGetFeedbacksQuery<GetFeedbacksQuery,GetFeedbacksQueryVariables>()
        console.log(data);
    return { data, isFetching, error };
};