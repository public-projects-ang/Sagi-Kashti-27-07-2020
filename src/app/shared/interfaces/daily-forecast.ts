export interface DailyForecast {

  Date: string;
  EpochDate: number;
  Temperature: {
    Minimum: {
      Value: number,
      Unit: string,
      UnitType: number
    },
    Maximum: {
      Value: number,
      Unit: string,
      UnitType: number
    }
  };
  Day: {
    Icon: number,
    IconPhrase: string,
  };
  Night: {
    Icon: number,
    IconPhrase: string,
  };
}
