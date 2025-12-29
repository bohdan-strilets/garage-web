import type { DistanceUnit } from "@shared/enums/DistanceUnit";
import type { FuelEconomyUnit } from "@shared/enums/FuelEconomyUnit";
import type { PressureUnit } from "@shared/enums/PressureUnit";
import type { SpeedUnit } from "@shared/enums/SpeedUnit";
import type { TemperatureUnit } from "@shared/enums/TemperatureUnit";
import type { VolumeUnit } from "@shared/enums/VolumeUnit";

export type UserUnits = {
  distance?: DistanceUnit;
  volume?: VolumeUnit;
  speed?: SpeedUnit;
  fuelEconomy?: FuelEconomyUnit;
  temperature?: TemperatureUnit;
  pressure?: PressureUnit;
};
