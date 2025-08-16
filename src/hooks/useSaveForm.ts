import { useSaveFormMutation, SaveFormMutation, SaveFormMutationVariables } from "../generated/graphql";
import { useToast } from "@/components/ui/use-Toast";

export const useSaveForm = (setFormData: (formData: any) => void) => {
    const { toast } = useToast();
     const { mutate, isPending: isLoading,isSuccess,isError } = useSaveFormMutation<SaveFormMutation, SaveFormMutationVariables>({
        onSuccess: () => {
            toast({
                title: '🎉 Form submitted successfully!',
                description: 'Thank you for your message!',
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
                description: 'Please try again in a moment.',
                status: 'error',
            });
        }
     });
     console.log('isSaving', isLoading);
    return { mutate, isLoading, isSuccess, isError };
};