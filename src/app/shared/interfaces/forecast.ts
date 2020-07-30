import { DailyForecast } from './daily-forecast';

export interface Forecast {
  Headline: {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Text: string;
    Category: string;
  };
  DailyForecasts: DailyForecast[];
}
