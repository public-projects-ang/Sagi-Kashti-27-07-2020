import { Weather } from './weather';
import { Location } from './location';

export interface SelectedLocationState {
  details: Location;
  currentWeather: Weather;
  forecast: Weather[];
}
