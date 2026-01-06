import { paths } from '@shared/router'

import type { NavItem } from '../types/NavItem'

export const primaryNav: readonly NavItem[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    to: paths.APP.DASHBOARD.ROOT,
    icon: 'dashboard',
  },
  {
    key: 'vehicles',
    label: 'Vehicles',
    to: paths.APP.VEHICLES.ROOT,
    icon: 'car',
  },
  {
    key: 'maintenance',
    label: 'Maintenance',
    to: paths.APP.MAINTENANCE.ROOT,
    icon: 'wrench',
  },
  {
    key: 'energy',
    label: 'Energy',
    to: paths.APP.ENERGY.ROOT,
    icon: 'fuel',
  },
  {
    key: 'statistics',
    label: 'Statistics',
    to: paths.APP.STATISTICS.ROOT,
    icon: 'chart',
  },
] as const
