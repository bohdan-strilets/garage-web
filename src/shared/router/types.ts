import type { paths } from './paths'

export type StaticPath =
  | typeof paths.HOME
  | typeof paths.AUTH.LOGIN
  | typeof paths.AUTH.REGISTER
  | typeof paths.APP.DASHBOARD.ROOT
  | typeof paths.APP.VEHICLES.ROOT
  | typeof paths.APP.MAINTENANCE.ROOT
  | typeof paths.APP.ENERGY.ROOT
  | typeof paths.APP.STATISTICS.ROOT
  | typeof paths.AUTH.VERIFY_EMAIL
  | typeof paths.AUTH.FORGOT_PASSWORD
