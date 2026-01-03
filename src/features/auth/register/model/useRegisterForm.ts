import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

import { sessionActions } from "@entities/session";
import { isEmailVerified } from "@entities/user";
import { NAVIGATION_PATHS } from "@features/navigation/config/navigationPaths";

import { handleRegisterError } from "./handleRegisterError";
import { register } from "./registerApi";
import { registerSchema, type RegisterFormValues } from "./registerSchema";

import type { RegisterResponse } from "../types/RegisterResponse";

export const useRegisterForm = () => {
  const navigate = useNavigate();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const registerFn = (data: RegisterFormValues) => {
    return register({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
  };

  const onSuccess = (response: RegisterResponse) => {
    const state = response.data;
    sessionActions.set({
      accessToken: state.accessToken,
      user: state.user,
    });

    if (isEmailVerified(state.user)) {
      navigate({ to: NAVIGATION_PATHS.DASHBOARD });
    } else {
      navigate({ to: NAVIGATION_PATHS.EMAIL_VERIFICATION });
    }
  };

  const mutation = useMutation({
    mutationFn: registerFn,
    onSuccess,
    onError: handleRegisterError(form),
  });

  const onSubmit = (data: RegisterFormValues) => {
    mutation.mutate(data);
  };

  return {
    form,
    onSubmit,
    isSubmitting: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};
