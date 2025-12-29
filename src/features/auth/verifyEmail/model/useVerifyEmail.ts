import { useMutation } from "@tanstack/react-query";

import { resendVerificationEmail } from "./verifyEmailApi";

export const useVerifyEmail = () => {
  const resendMutation = useMutation({
    mutationFn: resendVerificationEmail,
  });

  const resend = () => {
    resendMutation.mutate();
  };

  return {
    resend,
    isResending: resendMutation.isPending,
    isResent: resendMutation.isSuccess,
    error: resendMutation.error,
  };
};
