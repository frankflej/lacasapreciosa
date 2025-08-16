import { useSaveFeedbackMutation, SaveFeedbackMutation, SaveFeedbackMutationVariables } from "../generated/graphql";
import { useToast } from "@/components/ui/use-Toast";

export const useSaveFeedbacks = (setFormData: (formData: any) => void) => {
    const { toast } = useToast();
     const { mutate, isPending: isLoading,isSuccess } = useSaveFeedbackMutation<SaveFeedbackMutation, SaveFeedbackMutationVariables>({
        onSuccess: () => {
            console.log("am doneeeee");
            toast({
                title: '🎉 Feedback submitted successfully!',
                description: 'Thank you for your feedback!',
                status: 'success',
            });
            setFormData({
                name: '',
                email: '',
                rating: 0,
                review: '',
                wouldRecommend: ''
            });
        },
        onError: () => {
            toast({
                title: '😔 Oops! Something went wrong',
                description: 'We couldn\'t save your feedback. Please try again in a moment.',
                status: 'error',
            });
        }
     });
     console.log('isSaving', isLoading);
    return { mutate, isLoading, isSuccess };
};