const withId = (base: string) => (id: string) => `${base}/${id}`

export const paths = {
  HOME: '/',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  },
  APP: {
    DASHBOARD: {
      ROOT: '/app/dashboard',
    },
    VEHICLES: {
      ROOT: '/app/vehicles',
      DETAILS: withId('/app/vehicles'),
    },
    MAINTENANCE: {
      ROOT: '/app/maintenance',
      DETAILS: withId('/app/maintenance'),
    },
    ENERGY: {
      ROOT: '/app/energy',
    },
    STATISTICS: {
      ROOT: '/app/statistics',
    },
  },
} as const
