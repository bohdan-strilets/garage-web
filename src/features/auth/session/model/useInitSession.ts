/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useMutation } from "@tanstack/react-query";

import { sessionActions } from "@entities/session";
import type { AuthSession } from "@entities/session/types/AuthSession";

import { getMe } from "./getMeApi";

export const useInitSession = () => {
  const onSuccess = (data: AuthSession) => {
    sessionActions.set({
      accessToken: data.accessToken,
      user: data.user,
    });
  };

  const onError = () => {
    sessionActions.clear();
  };

  const mutation = useMutation({
    mutationFn: getMe,
    onSuccess,
    onError,
  });

  useEffect(() => {
    mutation.mutate();
  }, []);

  return {
    isLoading: mutation.isPending,
  };
};
