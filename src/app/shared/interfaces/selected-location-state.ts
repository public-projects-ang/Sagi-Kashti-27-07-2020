import { Weather } from './weather';
import { Location } from './location';
import { Forecast } from './forecast';

export interface SelectedLocationState {
  details: Location;
  currentWeather: Weather;
  forecast: Forecast;
}
