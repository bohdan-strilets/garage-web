import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { handleVerifyEmailError } from "./handleVerifyEmailError";
import { resendVerificationEmail } from "./verifyEmailApi";

export const useVerifyEmail = () => {
  const resendMutation = useMutation({
    mutationFn: resendVerificationEmail,

    onSuccess: () => {
      toast.success("Verification email has been sent");
    },

    onError: handleVerifyEmailError,
  });

  return {
    resend: () => resendMutation.mutate(),
    isResending: resendMutation.isPending,
  };
};
