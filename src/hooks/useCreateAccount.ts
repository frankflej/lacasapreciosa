import { useCreateAccountMutation, CreateAccountMutation, CreateAccountMutationVariables,useFetchUserByEmailQuery } from "../generated/graphql";
import { useToast } from "@/components/ui/use-Toast";
import { useRouter } from "next/navigation";

export const useCreateAccount = (setFormData: (formData: any) => void,formData: any,setIsSignUp: (isSignUp: boolean) => void,setPasswordError: (passwordError: string) => void) => {
    const { toast } = useToast();
     const { mutate, isPending: isLoading,isSuccess } = useCreateAccountMutation<CreateAccountMutation, CreateAccountMutationVariables>({
        onSuccess: () => {
            toast({
                title: '🎉 Account created successfully!',
                description: 'Thank you for creating an account!',
                status: 'success',
            });
            setFormData({
                FirstName: '',
                LastName: '',
                Email: '',
                Password: '',
                Confirm: ''
            });
            setIsSignUp(false);
        },
        onError: () => {
            toast({
                title: '😔 Oops! Something went wrong',
                description: 'Please try again in a moment.',
                status: 'error',
            });
        }
     });
      const { data } =useFetchUserByEmailQuery(
        {
            email: formData.Email ?? ""
        }
    );
     const router = useRouter();
     const handleCreateAccount = async (input: CreateAccountMutationVariables['input']) => {
       
        if (data?.User.length && data?.User.length > 0) {
            toast({
                title: '😔 Oops! Email already exists',
                description: 'Please try again with a different email.',
                status: 'error',
            });
            return;
        }
        mutate({
            input: {
                Email: input.Email,
                Password: input.Password,
                FirstName: input.FirstName,
                LastName: input.LastName,
            }
        })
     }
     const handleSignIn = async (input: CreateAccountMutationVariables['input']) => {
       if(input.Email === data?.User[0].Email && input.Password === data?.User[0].Password){
        router.push('/admin/admins');
        localStorage.setItem('admin_token', data?.User[0].Email ?? "");
       }
       else{
        setPasswordError("Invalid email or password");
        
       }
    }
    return { mutate, isLoading, isSuccess,handleCreateAccount,handleSignIn };
};