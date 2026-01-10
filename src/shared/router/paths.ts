const withId = (base: string) => (id: string) => `${base}/${id}`

export const paths = {
  HOME: {
    ROOT: '/',
  },

  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    VERIFY_EMAIL: '/verify-email',
    FORGOT_PASSWORD: '/forgot-password',
  },

  APP: {
    DASHBOARD: {
      ROOT: '/dashboard',
    },
    VEHICLES: {
      ROOT: '/vehicles',
      DETAILS: withId('/vehicles'),
    },
    MAINTENANCE: {
      ROOT: '/maintenance',
      DETAILS: withId('/maintenance'),
    },
    ENERGY: {
      ROOT: '/energy',
    },
    STATISTICS: {
      ROOT: '/statistics',
    },
  },
} as const
