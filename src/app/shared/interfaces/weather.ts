export interface Weather {
  EpochTime: number;
  HasPrecipitation: boolean;
  IsDayTime: boolean;
  Link: string;
  LocalObservationDateTime: string;
  MobileLink: string;
  PrecipitationType: string;
  Temperature: {
    Imperial: {
      Unit: string;
      UnitType: number;
      Value: number;
    }
    Metric: {
      Unit: string;
      UnitType: number;
      Value: number;
    }
  };
  WeatherIcon: number;
  WeatherText: string;
}
