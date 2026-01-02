/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useMutation } from "@tanstack/react-query";

import { sessionActions } from "@entities/session";

import { getMe } from "./getMeApi";

import type { GetMeResponse } from "../types/GetMeResponse";

export const useInitSession = () => {
  const onSuccess = (data: GetMeResponse) => {
    const state = data.data;
    sessionActions.set({
      accessToken: state.accessToken,
      user: state.user,
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
