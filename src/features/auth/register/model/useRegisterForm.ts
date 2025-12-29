import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { register } from "./registerApi";
import { registerSchema, type RegisterFormValues } from "./registerSchema";

export const useRegisterForm = () => {
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

  const mutation = useMutation({
    mutationFn: (data: RegisterFormValues) =>
      register({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      }),
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
