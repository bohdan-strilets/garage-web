export const apiRoutes = {
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
    me: '/auth/me',
    resendVerification: '/auth/verify-email/resend',
    forgotPassword: '/auth/password/forgot',
    verificationEmail: (token?: string) =>
      `/auth/verify-email${token ? `?token=${token}` : ''}`,
  },
} as const
