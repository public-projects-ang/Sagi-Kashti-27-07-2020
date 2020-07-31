import { Weather } from './weather';
import { Location } from './location';
import { Forecast } from './forecast';
import { Favorite } from './favorite';

export interface SelectedLocationState {
  details: Location;
  currentWeather: Weather;
  forecast: Forecast;
}
