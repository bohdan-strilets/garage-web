import type {
  DistanceUnit,
  FuelEconomyUnit,
  PressureUnit,
  SpeedUnit,
  TemperatureUnit,
  VolumeUnit,
} from '@shared/enums/units'

export type UserUnits = {
  distance?: DistanceUnit
  volume?: VolumeUnit
  speed?: SpeedUnit
  fuelEconomy?: FuelEconomyUnit
  temperature?: TemperatureUnit
  pressure?: PressureUnit
}
