import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

import { useSessionStore } from "@entities/session";
import { isEmailVerified } from "@entities/user";

import { register } from "./registerApi";
import { registerSchema, type RegisterFormValues } from "./registerSchema";

import type { RegisterResponse } from "../types/RegisterResponse";

export const useRegisterForm = () => {
  const { setSession } = useSessionStore();
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
    mutationFn: registerFn,
    onSuccess,
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
