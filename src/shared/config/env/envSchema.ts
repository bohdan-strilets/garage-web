import * as yup from 'yup';

export const envSchema = yup.object({
  VITE_API_URL: yup.string().required(),
});
