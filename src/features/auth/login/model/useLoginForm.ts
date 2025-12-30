import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

import { useSessionStore } from "@entities/session";
import { isEmailVerified } from "@entities/user";

import { handleLoginError } from "./handleLoginError";
import { login } from "./loginApi";
import { LoginSchema, type LoginFormValues } from "./loginSchema";

import type { LoginResponse } from "../types/LoginResponse";

export const useLoginForm = () => {
  const { setSession } = useSessionStore();
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginFn = (data: LoginFormValues) => {
    return login({
      email: data.email,
      password: data.password,
    });
  };

  const onSuccess = (response: LoginResponse) => {
    setSession({
      accessToken: response.accessToken,
      user: response.user,
    });

    if (isEmailVerified(response.user)) {
      navigate({ to: "/" });
    } else {
      navigate({ to: "/verify-email" });
    }
  };

  const mutation = useMutation({
    mutationFn: loginFn,
    onSuccess,
    onError: handleLoginError(form),
  });

  const onSubmit = (data: LoginFormValues) => {
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
